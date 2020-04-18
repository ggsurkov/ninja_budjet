import {Component} from '@angular/core';
import {Keyboard} from '@ionic-native/keyboard';

@Component({
    selector: 'money-tab',
    templateUrl: 'money-tab.page.html',
    styleUrls: ['money-tab.page.scss']
})
export class MoneyTabPage {
    private writeOffMoneyCount: number;
    private writeOffMoneyString: string = '0';
    private returnPaymentValue: string = '';
    private plannedBudget: number = 15000;
    private plannedBudgetDay: number = 500;

    constructor(public keyboard: Keyboard) {
    }

    public calculate(keyNumber: string): void {
        if (this.writeOffMoneyString === '0') {
            this.writeOffMoneyString = '';
        }
        if (this.returnPaymentValue !== '') {
            this.returnPaymentValue = '';
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
        this.writeOffMoneyCount = parseFloat(this.writeOffMoneyString);
        this.plannedBudget -= this.writeOffMoneyCount;
        this.plannedBudgetDay -= this.writeOffMoneyCount;
        this.returnPaymentValue = this.writeOffMoneyString;
        this.writeOffMoneyString = '0';
    }

    public calculateSeparator(): void {
        if (this.writeOffMoneyString.search(',')) {
            return;
        }
        this.writeOffMoneyString += ',';
    }

    public returnPayment(): void {
        this.writeOffMoneyCount = parseFloat(this.returnPaymentValue);
        this.plannedBudget += this.writeOffMoneyCount;
        this.plannedBudgetDay += this.writeOffMoneyCount;
        this.returnPaymentValue = '';
    }

    public cleanAll() {
        this.writeOffMoneyString = '0';
    }
}
