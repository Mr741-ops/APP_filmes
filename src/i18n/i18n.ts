import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from './locales/en/eng';
import translationPT from './locales/pt/pt';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translationEN },
      pt: { translation: translationPT }
    },
    lng: localStorage.getItem('language') ?? 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });
