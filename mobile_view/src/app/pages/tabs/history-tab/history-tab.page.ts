import {Component} from '@angular/core';
import {Wallet} from '../../../models/wallet';
import {StorageService} from '../../../storage/storage.service';

@Component({
    selector: 'history-tab',
    templateUrl: 'history-tab.page.html',
    styleUrls: ['history-tab.page.scss']
})
export class HistoryTabPage {
    public currencySymbol: string = '&#8381;';
    public mainWallet: Wallet;

    constructor(private storageService: StorageService) {
    }

    ionViewDidEnter() {
        this.storageService.getObject('mainWallet').then((data: Wallet) => {
            this.mainWallet = data;
        });
    }

}
