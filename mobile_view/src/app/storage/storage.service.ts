import {Injectable} from '@angular/core';
import {createNewWallet, Wallet} from '../models/wallet';
import {createNewUser} from '../models/user';
import {Storage} from '@ionic/storage';
import {replaceInArrayByParam} from '../utils/replace-in-array.util';
import {Payment} from '../models/payment';
import {initDefaultAppSettings} from '../models/app-settings';

@Injectable({
    providedIn: 'root'
})
export class StorageService {

    constructor(private storage: Storage) {
    }

    public async set(key: string, value: any): Promise<any> {
        try {
            const result = await this.storage.set(key, value);
            console.log('set string in storage: ' + result);
            return true;
        } catch (reason) {
            console.log(reason);
            return false;
        }
    }

    public async get(key: string): Promise<any> {
        try {
            const result = await this.storage.get(key);
            console.log('storageGET: ' + key + ': ' + result);
            if (result != null) {
                return result;
            }
            return null;
        } catch (reason) {
            console.log(reason);
            return null;
        }
    }

    public async setObject(key: string, object: object): Promise<any> {
        try {
            const result = await this.storage.set(key, JSON.stringify(object));
            console.log('set Object in storage: ' + result);
            return result;
        } catch (reason) {
            console.log(reason);
            return false;
        }
    }

    public async getObject(key: string): Promise<any> {
        try {
            const result = await this.storage.get(key);
            if (result != null) {
                return JSON.parse(result);
            }
            return null;
        } catch (reason) {
            console.log(reason);
            return null;
        }
    }

    public remove(key: string) {
        this.storage.remove(key);
    }

    public clear() {
        this.storage.clear();
    }

    public updateObjectByParams(objectName: string, params: any[]) {
        try {
            this.getObject(objectName).then((updatedObject: any) => {
                params.forEach((param) => {
                    updatedObject[param.key] = param.value;
                });
                this.setObject(objectName, updatedObject).then(() => {
                    console.log(objectName + ' updated successfully!', updatedObject);
                    return null;
                });
            });
        } catch (reason) {
            console.log(reason);
            return null;
        }
    }

    public async saveMainWallet(wallet: Wallet): Promise<any> {
        try {
            this.setObject('mainWallet', wallet).then(() => {
                this.getObject('wallets').then((walletsFromStorage) => {
                    const updatedWallets = replaceInArrayByParam(walletsFromStorage, wallet, 'guid');
                    this.setObject('wallets', updatedWallets).then(() => {
                        console.log('saveMainWallet successfully!', wallet);
                        return null;
                    });
                });
            });
        } catch (reason) {
            console.log(reason);
            return null;
        }
    }

    public async deletePaymentByGuid(paymentGuid: string): Promise<any> {
        try {
            this.getObject('mainWallet').then((mainWalletFromStorage) => {
                const deletedPayment: Payment = mainWalletFromStorage.history.payments
                    .find((payment: Payment) => payment.guid === paymentGuid);
                mainWalletFromStorage.history.payments.splice(mainWalletFromStorage.history.payments.indexOf(deletedPayment), 1);
                this.saveMainWallet(mainWalletFromStorage).then(() => {
                    console.log('deletePaymentByGuid successfully!', mainWalletFromStorage.history.payments);
                    return null;
                });
            });
        } catch (reason) {
            console.log(reason);
            return null;
        }
    }

    public initDataApp(mode: { defaultMode: boolean }) {
        if (mode.defaultMode) {
            // this.setObject('globalStorage', initGlobalStorage());
            const firstWallet: Wallet = createNewWallet('First Wallet');
            this.setObject('user', createNewUser());
            this.setObject('wallets', [firstWallet]);
            this.setObject('goal', null);
            this.setObject('mainWallet', firstWallet);
            this.setObject('appSettings', initDefaultAppSettings());
        }
    }


}
