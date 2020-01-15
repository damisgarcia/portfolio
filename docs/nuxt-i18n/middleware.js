import Cookie from 'cookie'
import JsCookie from 'js-cookie'
import middleware from '../middleware'

middleware['i18n'] = async (context) => {
  const { app, req, route, store, redirect, isHMR } = context;

  if (isHMR) {
    return
  }

  // Options
  const STRATEGIES = {"PREFIX":"prefix","PREFIX_EXCEPT_DEFAULT":"prefix_except_default","PREFIX_AND_DEFAULT":"prefix_and_default","NO_PREFIX":"no_prefix"}
  const STRATEGY = 'prefix_except_default'
  const lazy = false
  const vuex = {"moduleName":"i18n","syncLocale":false,"syncMessages":false,"syncRouteParams":true}
  const differentDomains = false

  // Helpers
  const LOCALE_CODE_KEY = 'code'
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
  const routesNameSeparator = '___'
  const defaultLocaleRouteNameSuffix = 'default'
  const locales = getLocaleCodes(["pt-br","en"])
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

  let locale = app.i18n.locale || app.i18n.defaultLocale || null

  // Handle root path redirect
  const rootRedirect = ''
  if (route.path === '/' && rootRedirect) {
    redirect('/' + rootRedirect, route.query)
    return
  }

  // Update for setLocale to have up to date route
  app.i18n.__route = route

  // Handle browser language detection
  const detectBrowserLanguage = {"useCookie":false,"cookieKey":"i18n_redirected","alwaysRedirect":"","fallbackLocale":null}
  const routeLocale = getLocaleFromRoute(route, routesNameSeparator, defaultLocaleRouteNameSuffix, locales)

  const { useCookie, cookieKey, alwaysRedirect, fallbackLocale } = detectBrowserLanguage
  const { getLocaleCookie } = app.i18n

  if (detectBrowserLanguage) {
    let browserLocale

    if (useCookie && (browserLocale = getLocaleCookie()) && browserLocale !== 1 && browserLocale !== '1') {
      // Get preferred language from cookie if present and enabled
      // Exclude 1 for backwards compatibility and fallback when fallbackLocale is empty
    } else if (process.client && typeof navigator !== 'undefined' && navigator.language) {
      // Get browser language either from navigator if running on client side, or from the headers
      browserLocale = navigator.language.toLocaleLowerCase().substring(0, 2)
    } else if (req && typeof req.headers['accept-language'] !== 'undefined') {
      browserLocale = req.headers['accept-language'].split(',')[0].toLocaleLowerCase().substring(0, 2)
    }

    if (browserLocale) {
      // Handle cookie option to prevent multiple redirections
      if (!useCookie || alwaysRedirect || !getLocaleCookie()) {
        let redirectToLocale = fallbackLocale

        // Use browserLocale if we support it, otherwise use fallbackLocale
        if (locales.includes(browserLocale)) {
          redirectToLocale = browserLocale
        }

        if (redirectToLocale && locales.includes(redirectToLocale)) {
          if (redirectToLocale !== app.i18n.locale) {
            // We switch the locale before redirect to prevent loops
            await app.i18n.setLocale(redirectToLocale)
          }
        } else if (useCookie && !getLocaleCookie()) {
          app.i18n.setLocaleCookie(redirectToLocale)
        }

        return
      }
    }
  }

  await app.i18n.setLocale(routeLocale ? routeLocale : locale)
}
