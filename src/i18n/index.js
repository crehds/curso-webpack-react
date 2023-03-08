import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from './en.json'
import es from './es.json'


const resources = { en, es }

const location = navigator.language

i18next
  .use(initReactI18next)
  .init({
    resources,
    lng: location,
    interpolation: { escapeValue: false }
  })

export default i18next;
