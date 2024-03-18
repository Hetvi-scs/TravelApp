import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './en.json'
import hn from './hn.json'

export const languageResources = {
    en: {translation:en},
    hn: {translation:hn}
}

i18next.use(initReactI18next).init({
 compatibilityJSON:'v3',
 lng:'en',
 fallbackLng:'en',
resources:languageResources
})

export default i18next;