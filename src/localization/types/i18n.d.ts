import i18next from "i18next";
import type { ILng_Main } from "../translations/[main]/types";


declare module 'i18next' {
    interface CustomTypeOptions {
        resources: {
            '[main]': ILng_Main
        }
    }
}