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
    @Input() public modalTitle: string;
    public defaultWalletConfigKeys: WalletConfigKeyI[];

    constructor(private modalCtrl: ModalController) {
    }

    ngOnInit() {
        this.defaultWalletConfigKeys = getDefaultWalletConfigKeys();
    }

    dismissModal(): any {
        this.modalCtrl.dismiss({
            walletCreated: false,
            wallet: this.wallet
        });
    }

    toCreate(wallet: Wallet): any {
        this.modalCtrl.dismiss({
            walletCreated: true,
            wallet
        });
    }
}
