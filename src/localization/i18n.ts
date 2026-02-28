import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import { LANGUAGE_APP } from "./types/language";
import { main_ru, main_en, main_pl } from "./translations/[main]";
import { common_en, common_pl, common_ru } from "./translations/[common]";


// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
    ru: {
        '[main]': main_ru,
        '[common]': common_ru
    },
    en: {
        '[main]': main_en,
        '[common]': common_en
    },
    pl: {
        '[main]': main_pl,
        '[common]': common_pl
    }
};


const ns = ['[common]', '[main]'];


i18n
.use(LanguageDetector) // подключение определения языка
.use(initReactI18next) // passes i18n down to react-i18next
.init({
    supportedLngs: LANGUAGE_APP, // поддерживаемые языки
    nonExplicitSupportedLngs: true, // будет сопостовлять не только языки "ru, en", но и регирны "ru-RU"
    fallbackLng: "en", // язык по умолчанию

    detection: {
        order: ["localStorage", "navigator"], // ✅ сначала localStorage
        caches: ["localStorage"],             // ✅ куда сохранять выбор
        lookupLocalStorage: "language",       // ✅ ключ в localStorage (по умолчанию "i18nextLng")
    },

    resources,
    ns,

    interpolation: {
        escapeValue: false // react already safes from xss
    }
});

export default i18n;