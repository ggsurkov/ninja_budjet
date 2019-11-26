import {Component} from '@angular/core';

@Component({
    selector: 'note-tab',
    templateUrl: 'note-tab.page.html',
    styleUrls: ['note-tab.page.scss']
})
export class NoteTabPage {
    public countToEndMonth: number;
    public currencySymbol: string;

    constructor() {
        this.countToEndMonth = 12312;
        this.currencySymbol = '&#8381;';
    }
}
