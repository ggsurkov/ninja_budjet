import {createNewUser, User} from '../models/user';
import {createNewWallet, Wallet} from '../models/wallet';
import {Goal} from '../models/goal';

enum StorageNameEnum {
    GLOBAL_STORAGE = 'globalStorage'
}


export interface GlobalStorageModel {
    user: User;
    wallets: Wallet[];
    goal: Goal;
    mainWallet: Wallet;
}


export function initGlobalStorage(): GlobalStorageModel {
    return {
        user: createNewUser(),
        wallets: [createNewWallet('First Wallet')],
        goal: null,
        mainWallet: null
    };
}
