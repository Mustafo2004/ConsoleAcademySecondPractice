/* eslint-disable no-unused-vars */
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import TranslationEN from "../../public/Locales/EN/Translation.json";
import TranslationRU from "../../public/Locales/RU/Translation.json";

const availableLanguages = ["en", "ru"];

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en", // Default language is English
    returnObjects: true,
    resources: {
      en: {
        translation: TranslationEN,
      },
      ru: {
        translation: TranslationRU,
      },
    },
    detection: {
      order: [
        "localStorage", // Check localStorage first
        "cookie",
        "querystring",
        "navigator",
        "htmlTag",
        "path",
        "subdomain",
      ],
      caches: ["localStorage", "cookie"], // Cache the language in localStorage and cookie
    },
    react: {
      useSuspense: false,
    },
    lng: localStorage.getItem("i18nextLng") || "en", // Use language from localStorage or fallback to 'en'
  });

export default i18n;
