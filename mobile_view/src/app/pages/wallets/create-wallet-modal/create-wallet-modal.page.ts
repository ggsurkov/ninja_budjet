import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {Wallet} from '../../../models/wallet';
import {getDefaultWalletConfigKeys, WalletConfigKeyI} from '../../../config/default-wallet-config';

@Component({
    selector: 'app-create-wallet-modal',
    templateUrl: './create-wallet-modal.page.html',
    styleUrls: ['./create-wallet-modal.page.scss'],
})

export class CreateWalletModalPage implements OnInit {
    @Input() public wallet: Wallet;
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
            wallet: wallet
        });
    }
}
