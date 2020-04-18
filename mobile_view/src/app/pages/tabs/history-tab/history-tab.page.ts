import {Component} from '@angular/core';

@Component({
    selector: 'history-tab',
    templateUrl: 'history-tab.page.html',
    styleUrls: ['history-tab.page.scss']
})
export class HistoryTabPage {
    public countToEndMonth: number;
    public currencySymbol: string;

    constructor() {
        this.countToEndMonth = 12312;
        this.currencySymbol = '&#8381;';
    }
}
