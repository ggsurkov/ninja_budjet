import {Guid} from 'guid-typescript';
import {WalletConfig} from './wallet-config';
import {WalletHistory} from './wallet-history';
import {CurrencyType} from '../dictionary/currency-type';

export interface Wallet {
    value: number;
    history: WalletHistory;
    config: WalletConfig;
    guid: string;
    lastEnterDate: string;
    plannedDayBudgetValue: number;
    previousUpdatedPlannedBudgetExpireDay: string;
}

export function createNewWallet(title?: string): Wallet {
    return {
        value: 10000,
        history: {payments: []},
        config: {
            title: title ? title : '',
            plannedBudgetValue: 10000,
            plannedBudgetExpireDay: new Date().toLocaleDateString(),
            currency: CurrencyType.DOLLAR_US,
        },
        guid: Guid.create().toString(),
        plannedDayBudgetValue: 0,
        lastEnterDate: new Date().toLocaleDateString(),
        previousUpdatedPlannedBudgetExpireDay: new Date().toLocaleDateString(),
    };
}
