import i18next from "i18next";
import { initReactI18next } from "react-i18next";

const resources = { en: { translation: { "main-role": "FULL-STACK WEB DEVELOPER" } },
  es: { translation: { "main-role": "DESARROLLADOR WEB FULL-STACK" } } }

const location = navigator.language

i18next
  .use(initReactI18next)
  .init({
    resources,
    lng: location,
    interpolation: { escapeValue: false }
  })

export default i18next;
