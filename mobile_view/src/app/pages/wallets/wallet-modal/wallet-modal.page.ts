import {Component, Input} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {Wallet} from '../../../models/wallet';

@Component({
    selector: 'app-wallet-modal',
    templateUrl: './wallet-modal.page.html',
    styleUrls: ['./wallet-modal.page.scss'],
})

export class WalletModalPage {
    @Input() public wallet: Wallet;
    public modalTitle: string;
    public today: string;

    constructor(private modalCtrl: ModalController) {
    }

    ionViewDidEnter(): void {
        this.modalTitle = this.wallet.config.title;
    }

    private dismissModal(): void {
        this.modalCtrl.dismiss({
            walletChanged: false,
            wallet: this.wallet
        });
    }

    toCreate(): void {
        this.modalCtrl.dismiss({
            walletChanged: true,
            wallet: this.wallet
        });
    }
}
