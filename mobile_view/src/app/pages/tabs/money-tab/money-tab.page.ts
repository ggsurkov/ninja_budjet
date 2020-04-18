import {Component, OnDestroy, OnInit} from '@angular/core';
import {Keyboard} from '@ionic-native/keyboard';

@Component({
    selector: 'money-tab',
    templateUrl: 'money-tab.page.html',
    styleUrls: ['money-tab.page.scss']
})
export class MoneyTabPage implements OnInit, OnDestroy {
    private isMoneyBackBtnShow: boolean = false;
    private writeOffMoney: number;

    constructor(public keyboard: Keyboard) {
    }

    ngOnInit(): void {
        this.keyboard.isVisible = true;
        this.keyboard.show();
    }

    ngOnDestroy(): void {
        this.keyboard.hide();
    }

}
