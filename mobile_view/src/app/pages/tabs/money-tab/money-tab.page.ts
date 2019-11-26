import {Component, OnDestroy, OnInit} from '@angular/core';
import {Keyboard} from '@ionic-native/keyboard/ngx';

@Component({
    selector: 'money-tab',
    templateUrl: 'money-tab.page.html',
    styleUrls: ['money-tab.page.scss']
})
export class MoneyTabPage implements OnInit, OnDestroy {
    public countToEndMonth: number;
    public currencySymbol: string;

    constructor(public keyboard: Keyboard) {
        this.countToEndMonth = 12312;
        this.currencySymbol = '&#8381;';
    }

    ngOnInit(): void {
        this.keyboard.show();
    }

    ngOnDestroy(): void {
        this.keyboard.hide();
    }

}
