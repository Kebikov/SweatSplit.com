import i18next from "i18next";
import type { ILng_Main } from "../translations/[main]/types";
import { ILng_Common } from "../translations/[common]/types";


declare module 'i18next' {
    interface CustomTypeOptions {
        resources: {
            '[main]': ILng_Main,
            '[common]': ILng_Common
        }
    }
}