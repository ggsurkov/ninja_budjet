import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {Wallet} from '../../../models/wallet';
import {getDefaultWalletConfigKeys, WalletConfigKeyI} from '../../../config/default-wallet-config';

@Component({
    selector: 'app-wallet-modal',
    templateUrl: './wallet-modal.page.html',
    styleUrls: ['./wallet-modal.page.scss'],
})

export class WalletModalPage implements OnInit {
    @Input() public wallet: Wallet;
    public defaultWalletConfigKeys: WalletConfigKeyI[];
    public modalTitle: string;
    public today: string;

    constructor(private modalCtrl: ModalController) {
    }

    ngOnInit(): void {
        this.today = new Date().toLocaleDateString();
        this.modalTitle = this.wallet.walletConfig.title;
        this.defaultWalletConfigKeys = getDefaultWalletConfigKeys();
    }

    dismissModal(): void {
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
