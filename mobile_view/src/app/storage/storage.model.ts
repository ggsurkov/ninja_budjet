import {createNewUser, User} from '../models/user';
import {createNewWallet, Wallet} from '../models/wallet';
import {Goal} from '../models/goal';
import {AppSettings, initDefaultAppSettings} from '../models/app-settings';

enum StorageNameEnum {
    GLOBAL_STORAGE = 'globalStorage'
}


export interface GlobalStorageModel {
    user: User;
    wallets: Wallet[];
    goal: Goal;
    mainWallet: Wallet;
    appSettings: AppSettings;
}


export function initGlobalStorage(): GlobalStorageModel {
    return {
        user: createNewUser(),
        wallets: [createNewWallet('First Wallet')],
        goal: null,
        mainWallet: null,
        appSettings: initDefaultAppSettings()
    };
}
