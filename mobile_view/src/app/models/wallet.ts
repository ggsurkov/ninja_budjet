import {Guid} from 'guid-typescript';
import {WalletConfig} from './wallet-config';
import {WalletHistory} from './wallet-history';

export interface Wallet {
    value: number;
    remainingDays: number;
    history: WalletHistory;
    config: WalletConfig;
    guid: string;
}

export function createNewWallet(title?: string): Wallet {
    return {
        value: 0,
        remainingDays: 0,
        history: {payments: []},
        config: {
            title: title ? title : 'New Wallet', plannedBudgetValue: null, plannedBudgetExpireDay: null
        },
        guid: Guid.create().toString(),
    };
}
