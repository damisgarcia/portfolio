const LOCALE_CODE_KEY = 'code'
const LOCALE_DOMAIN_KEY = 'domain'
const LOCALE_FILE_KEY = 'file'
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
const locales = ["pt-br","en"]
const localeCodes = getLocaleCodes(locales)

const isObject = value => value && !Array.isArray(value) && typeof value === 'object'

/**
 * Asynchronously load messages from translation files
 * @param  {Context}  context  Nuxt context
 * @param  {String}   locale  Language code to load
 */
export async function loadLanguageAsync (context, locale) {
  const { app } = context;

  if (!app.i18n.loadedLanguages) {
    app.i18n.loadedLanguages = []
  }

  if (!app.i18n.loadedLanguages.includes(locale)) {
    const langOptions = app.i18n.locales.find(l => l[LOCALE_CODE_KEY] === locale)
    if (langOptions) {
      const file = langOptions[LOCALE_FILE_KEY]
      if (file) {
      } else {
        console.warn('[nuxt-i18n] Could not find lang file for locale ' + locale)
      }
    }
  }
}

/**
 * Validate setRouteParams action's payload
 * @param {*} routeParams The action's payload
 */
export const validateRouteParams = routeParams => {
  if (!isObject(routeParams)) {
    console.warn(`[nuxt-i18n] Route params should be an object`)
    return
  }
  Object.entries(routeParams).forEach(([key, value]) => {
    if (!localeCodes.includes(key)) {
      console.warn(`[nuxt-i18n] Trying to set route params for key ${key} which is not a valid locale`)
    } else if (!isObject(value)) {
      console.warn(`[nuxt-i18n] Trying to set route params for locale ${key} with a non-object value`)
    }
  })
}
