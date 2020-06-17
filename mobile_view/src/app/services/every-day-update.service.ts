import {Injectable} from '@angular/core';
import {StorageService} from '../storage/storage.service';
import * as moment from 'moment-timezone';
import {Wallet} from '../models/wallet';

@Injectable()
export class EveryDayUpdateService {
    public momentjs: any = moment;

    constructor(public storageService: StorageService) {
        this.momentjs.tz.setDefault('UTC');
    }

    public getRemainingDays(plannedExpiredDay: string): any {
        const today: string = new Date().toLocaleDateString();
        return this.momentjs(plannedExpiredDay).diff(today, 'days');
    }

    public needToUpdatePlannedDayBudget(mainWallet: Wallet): boolean {
        const today: string = new Date().toLocaleDateString();
        return this.momentjs(mainWallet.lastEnterDate).diff(today, 'days') !== 0 ||
            mainWallet.previousUpdatedPlannedBudgetExpireDay !== mainWallet.config.plannedBudgetExpireDay;
    }

    public updatePlannedDayBudget(mainWallet: Wallet, remainingDays: number): Promise<Wallet> {
        return new Promise<Wallet>((resolve, reject) => {
            const today: string = new Date().toLocaleDateString();
            mainWallet.lastEnterDate = today;
            mainWallet.previousUpdatedPlannedBudgetExpireDay = mainWallet.config.plannedBudgetExpireDay;
            mainWallet.plannedDayBudgetValue = mainWallet.value / remainingDays;
            this.storageService.saveMainWallet(mainWallet);
            resolve(mainWallet);
        });
    }
}
