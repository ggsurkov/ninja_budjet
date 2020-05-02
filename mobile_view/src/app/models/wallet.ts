import {Guid} from 'guid-typescript';
import {WalletConfig} from './wallet-config';
import * as moment from 'moment';

export interface Wallet {
    walletValue: number;
    walletRemainingDays: number;
    walletHistory: WalletHistory;
    walletConfig: WalletConfig;
    guid: string;

}

export function createNewWallet(): Wallet {
    return {
        walletValue: 0,
        walletRemainingDays: 0,
        walletHistory: null,
        walletConfig: {
            name: 'New Wallet', plannedBudgetValue: 0, plannedBudgetExpireDay: moment().toDate()
        },
        guid: Guid.create().toString()
    };
}
