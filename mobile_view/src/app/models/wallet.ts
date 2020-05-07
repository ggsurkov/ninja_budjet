import {Guid} from 'guid-typescript';
import {WalletConfig} from './wallet-config';

export interface Wallet {
    walletValue: number;
    walletRemainingDays: number;
    walletHistory: WalletHistory;
    walletConfig: WalletConfig;
    guid: string;

}

export function createNewWallet(name?: string): Wallet {
    return {
        walletValue: 0,
        walletRemainingDays: 0,
        walletHistory: null,
        walletConfig: {
            name: name ? name : 'New Wallet', plannedBudgetValue: 0, plannedBudgetExpireDay: new Date()
        },
        guid: Guid.create().toString()
    };
}
