import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './json/en.json';
import hn from './json/hn.json';

export const languageresource = {
  en: {translation: en},
  hn: {translation: hn},
};

i18next.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'en',
  fallbackLng: 'en',
  resources: languageresource,
});

export default i18next;
