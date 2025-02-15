import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

import en from "./locales/en/translation.json";
import ru from "./locales/ru/translation.json";

i18n
  .use(HttpApi) // Load translations from external files
  .use(LanguageDetector) // Detect language from browser
  .use(initReactI18next) // Bind react-i18next
  .init({
    resources: {
      en: { translation: en },
      ru: { translation: ru },
    },
    fallbackLng: "en", // Default language
    debug: true, // Show logs in the console
    supportedLngs: ["en", "ru"],
    interpolation: {
      escapeValue: false, // hz che eto
    },
  });

export default i18n;
