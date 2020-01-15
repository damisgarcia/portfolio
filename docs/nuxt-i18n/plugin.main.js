import Cookie from 'cookie'
import JsCookie from 'js-cookie'
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { nuxtI18nSeo } from './seo-head'
import { validateRouteParams } from './utils'

Vue.use(VueI18n)

// Options
const LOCALE_CODE_KEY = 'code'
const LOCALE_DOMAIN_KEY = 'domain'
const STRATEGIES = {"PREFIX":"prefix","PREFIX_EXCEPT_DEFAULT":"prefix_except_default","PREFIX_AND_DEFAULT":"prefix_and_default","NO_PREFIX":"no_prefix"}
const STRATEGY = 'prefix_except_default'
const lazy = false
const vuex = {"moduleName":"i18n","syncLocale":false,"syncMessages":false,"syncRouteParams":true}

export default async (context) => {
  const { app, route, store, req, res, redirect } = context;

  // Helpers
  const getLocaleCodes = (locales = []) => {
  if (locales.length) {
    // If first item is a sting, assume locales is a list of codes already
    if (typeof locales[0] === 'string') {
      return locales
    }
    // Attempt to get codes from a list of objects
    if (typeof locales[0][LOCALE_CODE_KEY] === 'string') {
      return locales.map(locale => locale[LOCALE_CODE_KEY])
    }
  }
  return []
}
  const getLocaleFromRoute = (route = {}, routesNameSeparator = '', defaultLocaleRouteNameSuffix = '', locales = []) => {
  const codes = getLocaleCodes(locales)
  const localesPattern = `(${codes.join('|')})`
  const defaultSuffixPattern = `(?:${routesNameSeparator}${defaultLocaleRouteNameSuffix})?`
  // Extract from route name
  if (route.name) {
    const regexp = new RegExp(`${routesNameSeparator}${localesPattern}${defaultSuffixPattern}$`, 'i')
    const matches = route.name.match(regexp)
    if (matches && matches.length > 1) {
      return matches[1]
    }
  } else if (route.path) {
    // Extract from path
    const regexp = new RegExp(`^/${localesPattern}/`, 'i')
    const matches = route.path.match(regexp)
    if (matches && matches.length > 1) {
      return matches[1]
    }
  }
  return null
}
  const getHostname = () => (
  process.browser ? window.location.href.split('/')[2] : req.headers.host // eslint-disable-line
)
  const getForwarded = () => (
  process.browser ? window.location.href.split('/')[2] : (req.headers['x-forwarded-host'] ? req.headers['x-forwarded-host'] : req.headers.host)
)
  const getLocaleDomain = () => {
  const hostname = app.i18n.forwardedHost ? getForwarded() : getHostname()
  if (hostname) {
    const localeDomain = app.i18n.locales.find(l => l[LOCALE_DOMAIN_KEY] === hostname) // eslint-disable-line
    if (localeDomain) {
      return localeDomain[LOCALE_CODE_KEY]
    }
  }
  return null
}
  const syncVuex = async (locale = null, messages = null) => {
  if (vuex && store) {
    if (locale !== null && vuex.syncLocale) {
      await store.dispatch(vuex.moduleName + '/setLocale', locale)
    }
    if (messages !== null && vuex.syncMessages) {
      await store.dispatch(vuex.moduleName + '/setMessages', messages)
    }
  }
}

  // Register Vuex module
  if (store) {
    store.registerModule(vuex.moduleName, {
      namespaced: true,
      state: () => ({
        routeParams: {}
      }),
      actions: {
        setRouteParams ({ commit }, params) {
          if (process.env.NODE_ENV === 'development') {
            validateRouteParams(params)
          }
          commit('setRouteParams', params)
        }
      },
      mutations: {
        setRouteParams (state, params) {
          state.routeParams = params
        }
      },
      getters: {
        localeRouteParams: ({ routeParams }) => locale => routeParams[locale] || {}
      }
    }, { preserveState: !!store.state[vuex.moduleName] })
  }

  const detectBrowserLanguage = {"useCookie":false,"cookieKey":"i18n_redirected","alwaysRedirect":"","fallbackLocale":null}
  const { useCookie, cookieKey } = detectBrowserLanguage

  const getLocaleCookie = () => {
    if (useCookie) {
      if (process.client) {
        return JsCookie.get(cookieKey);
      } else if (req && typeof req.headers.cookie !== 'undefined') {
        const cookies = req.headers && req.headers.cookie ? Cookie.parse(req.headers.cookie) : {}
        return cookies[cookieKey]
      }
    }
    return null
  }

  const setLocaleCookie = locale => {
    if (!useCookie) {
      return;
    }
    const date = new Date()
    if (process.client) {
      JsCookie.set(cookieKey, locale, {
        expires: new Date(date.setDate(date.getDate() + 365)),
        path: '/'
      })
    } else if (res) {
      let headers = res.getHeader('Set-Cookie') || []
      if (typeof headers == 'string') {
        headers = [headers]
      }

      const redirectCookie = Cookie.serialize(cookieKey, locale, {
        expires: new Date(date.setDate(date.getDate() + 365)),
        path: '/'
      })
      headers.push(redirectCookie)

      res.setHeader('Set-Cookie', headers)
    }
  }

  const loadAndSetLocale = async (newLocale, { initialSetup = false } = {}) => {
    // Abort if different domains option enabled
    if (!initialSetup && app.i18n.differentDomains) {
      return
    }

    // Abort if newLocale did not change
    if (newLocale === app.i18n.locale) {
      return
    }

    const oldLocale = app.i18n.locale

    if (!initialSetup) {
      app.i18n.beforeLanguageSwitch(oldLocale, newLocale)

      if (useCookie) {
        app.i18n.setLocaleCookie(newLocale)
      }
    }

    // Lazy-loading enabled
    if (lazy) {
      const { loadLanguageAsync } = require('./utils')

      // Load fallback locale.
      if (app.i18n.fallbackLocale && newLocale !== app.i18n.fallbackLocale) {
        await loadLanguageAsync(context, app.i18n.fallbackLocale)
      }

      await loadLanguageAsync(context, newLocale)
    }

    app.i18n.locale = newLocale

    if (!initialSetup) {
      app.i18n.onLanguageSwitched(oldLocale, newLocale)
    }

    await syncVuex(newLocale, app.i18n.getLocaleMessage(newLocale))

    if (!initialSetup && STRATEGY !== STRATEGIES.NO_PREFIX) {
      const route = app.i18n.__route
      const routeName = route && route.name ? app.getRouteBaseName(route) : 'index'

      redirect(app.localePath(Object.assign({}, route , {
        name: routeName
      }), newLocale))
    }
  }

  // Set instance options
  app.i18n = new VueI18n({"fallbackLocale":"pt-br","messages":{"pt-br":{"homepage":"Início","about":"Sobre","portfolio":"Projetos","contact":"Contato"},"en":{"homepage":"Home","about":"About","portfolio":"Projects","contact":"Contact"}},"silentTranslationWarn":false})
  app.i18n.locales = ["pt-br","en"]
  app.i18n.defaultLocale = 'pt-br'
  app.i18n.differentDomains = false
  app.i18n.forwardedHost = false
  app.i18n.beforeLanguageSwitch = () => null
  app.i18n.onLanguageSwitched = () => null
  app.i18n.setLocaleCookie = setLocaleCookie
  app.i18n.getLocaleCookie = getLocaleCookie
  app.i18n.setLocale = (locale) => loadAndSetLocale(locale)

  // Current route. Updated from middleware also.
  app.i18n.__route = route

  // Extension of Vue
  if (!app.$t) {
    app.$t = app.i18n.t
  }

  // Inject seo function
  Vue.prototype.$nuxtI18nSeo = nuxtI18nSeo

  if (store && store.state.localeDomains) {
    app.i18n.locales.forEach(locale => {
      locale.domain = store.state.localeDomains[locale.code]
    })
  }

  let locale = app.i18n.defaultLocale || null

  if (app.i18n.differentDomains) {
    const domainLocale = getLocaleDomain()
    locale = domainLocale ? domainLocale : locale
  } else if (STRATEGY !== STRATEGIES.NO_PREFIX) {
    const routesNameSeparator = '___'
    const defaultLocaleRouteNameSuffix = 'default'

    const routeLocale = getLocaleFromRoute(route, routesNameSeparator, defaultLocaleRouteNameSuffix, app.i18n.locales)
    locale = routeLocale ? routeLocale : locale
  } else if (useCookie) {
      locale = getLocaleCookie() || locale
  }

  await loadAndSetLocale(locale, { initialSetup: true })
}
