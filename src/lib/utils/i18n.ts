import { derived, writable } from 'svelte/store'
import translations from './translations'

export type Locale = 'en' | 'hr' | 'hu'
export type TranslationKey = keyof (typeof translations)[Locale]
export type TranslationVars = { [key: string]: string }

export const locale = writable<Locale>('en')
export const locales = Object.keys(translations) as Locale[]

function translate(locale: Locale, key: TranslationKey, vars: TranslationVars) {
	// Let's throw some errors if we're trying to use keys/locales that don't exist.
	// We could improve this by using Typescript and/or fallback values.
	if (!key) throw new Error('no key provided to $t()')
	if (!locale) throw new Error(`no translation for key "${key}"`)

	// Grab the translation from the translations object.
	let text = translations[locale][key]

	if (!text) throw new Error(`no translation found for ${locale}.${key}`)

	// Replace any passed in variables in the translation string.
	Object.keys(vars).map(k => {
		const regex = new RegExp(`{{${k}}}`, 'g')
		text = text.replace(regex, vars[k])
	})

	return text
}

export const t = derived(
	locale,
	$locale =>
		(key: TranslationKey, vars: TranslationVars = {}) =>
			translate($locale, key, vars)
)
