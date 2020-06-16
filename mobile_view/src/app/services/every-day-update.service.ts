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

    public checkAndSetLastEnterDate(mainWallet: Wallet): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            const today: string = new Date().toLocaleDateString();
            const lastEnterDateNotEqualToday: boolean = this.momentjs(mainWallet.lastEnterDate).diff(today, 'days') !== 0;
            resolve(lastEnterDateNotEqualToday);
        });
    }
}
