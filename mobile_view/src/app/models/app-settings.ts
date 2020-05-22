import {LanguageTitles, LanguageType} from '../dictionary/language-type';
import {CurrencyType} from '../dictionary/currency-type';

export const SETTING_INSTALL_PARAM = {
    lang: 'lang',
    currency: 'currency',
};

export interface AppSettings {
    language: string;
    currency: string;
}

export function initDefaultAppSettings() {
    return {
        language: setLocaleSettingsByParam(SETTING_INSTALL_PARAM.lang),
        currency: setLocaleSettingsByParam(SETTING_INSTALL_PARAM.currency)
    };
}

export function setLocaleSettingsByParam(param: string): string {
    let lang: string = '';
    let currency: string = '';
    switch (navigator.language) {
        case LanguageType.EN:
            lang = LanguageTitles.EN;
            currency = CurrencyType.DOLLAR_US;
            break;
        case LanguageType.RU:
            lang = LanguageTitles.RU;
            currency = CurrencyType.RUBLE;
            break;
        default:
            lang = LanguageTitles.EN;
            currency = CurrencyType.DOLLAR_US;
            break;
    }
    return param === SETTING_INSTALL_PARAM.lang ? lang : currency;
}
