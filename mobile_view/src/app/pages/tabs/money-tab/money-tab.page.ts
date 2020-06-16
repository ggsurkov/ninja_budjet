import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Wallet} from '../../../models/wallet';
import {Events} from '@ionic/angular';
import {StorageService} from '../../../storage/storage.service';
import {createNewPayment, Payment} from '../../../models/payment';
import {EveryDayUpdateService} from '../../../services/every-day-update.service';

@Component({
    selector: 'money-tab',
    templateUrl: 'money-tab.page.html',
    styleUrls: ['money-tab.page.scss']
})
export class MoneyTabPage {
    private writeOffMoneyCount: number;
    private writeOffMoneyString: string = '0';
    public remainingDays: number;
    public mainWallet: Wallet;
    public currentPayment: Payment = null;
    public periodIsExpired: boolean;
    private plannedBudgetDay: number;

    constructor(public router: Router,
                public events: Events,
                private storageService: StorageService,
                private everyDayUpdateService: EveryDayUpdateService
    ) {
    }

    ionViewDidEnter(): void {
        this.storageService.getObject('mainWallet').then((data: Wallet) => {
            this.mainWallet = data;
            // this.everyDayUpdateService.checkAndSetLastEnterDate().then(() => {
            //
            // })
            this.remainingDays = this.everyDayUpdateService.getRemainingDays(this.mainWallet.config.plannedBudgetExpireDay);
            this.plannedBudgetDay = this.mainWallet.value / this.remainingDays;
            if (this.remainingDays <= 0) {
                this.periodIsExpired = true;
            }
        });

    }

    public calculateNumber(keyNumber: string): void {
        if (this.writeOffMoneyString === '0') {
            this.writeOffMoneyString = '';
        }
        if (this.currentPayment) {
            this.currentPayment = null;
        }
        this.writeOffMoneyString += keyNumber;
    }

    public delete(): void {
        this.writeOffMoneyString = this.writeOffMoneyString.slice(0, -1);
        if (this.writeOffMoneyString === '') {
            this.writeOffMoneyString = '0';
        }
    }

    public enter(): void {
        if (this.writeOffMoneyString === '0') {
            return;
        }
        const writeOffMoneyCount = parseFloat(this.writeOffMoneyString);
        this.mainWallet.value -= writeOffMoneyCount;
        this.plannedBudgetDay -= writeOffMoneyCount;
        this.createPayment(writeOffMoneyCount);
    }

    public calculateSeparator(): void {
        if (this.writeOffMoneyString.search(',')) {
            return;
        }
        this.writeOffMoneyString += ',';
    }

    public returnPayment(): void {
        this.mainWallet.value += this.currentPayment.value;
        this.plannedBudgetDay += this.currentPayment.value;
        this.deletePayment(this.currentPayment);
    }

    public cleanAll() {
        this.writeOffMoneyString = '0';
    }

    private createPayment(paymentValue: number): void {
        this.currentPayment = createNewPayment(paymentValue);
        this.mainWallet.history.payments.push(this.currentPayment);
        this.storageService.saveMainWallet(this.mainWallet).then(() => {
            this.cleanAll();
        });
    }

    private deletePayment(payment: Payment): void {
        this.storageService.deletePaymentByGuid(payment.guid).then(() => {
            this.currentPayment = null;
        });
    }
}
