import {CurrencyType} from '../dictionary/currency-type';

export interface WalletConfig {
    title: string;
    plannedBudgetValue: number;
    plannedBudgetExpireDay: string;
    currency: string;
}

export function createNewWalletConfig(): any {
    return {title: 'New Wallet', plannedBudgetValue: null, plannedBudgetExpireDay: null, currency: CurrencyType.DOLLAR_US};
}
