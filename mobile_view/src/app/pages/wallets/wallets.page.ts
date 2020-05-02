import {Component, OnInit} from '@angular/core';
import {createNewWallet, Wallet} from '../../models/wallet';
import {getDefaultWalletConfigKeys, WalletConfigKeyI} from '../../config/default-wallet-config';
import {ModalController} from '@ionic/angular';
import {CreateWalletModalPage} from './create-wallet-modal/create-wallet-modal.page';
import {OverlayEventDetail} from '@ionic/core';

@Component({
    selector: 'app-wallets',
    templateUrl: './wallets.page.html',
    styleUrls: ['./wallets.page.scss'],
})
export class WalletsPage implements OnInit {
    public wallets: Wallet[];
    public mainWallet: Wallet;
    public defaultWalletConfigKeys: WalletConfigKeyI[];

    constructor(private modalController: ModalController) {
    }

    ngOnInit() {
        this.defaultWalletConfigKeys = getDefaultWalletConfigKeys();
    }

    public chooseWallet(event: any): void {
        this.mainWallet = event;
    }

    public saveWallet(wallet: Wallet): void {
    }

    public createWallet(): void {
        this.presentModal(createNewWallet()).then((detail: OverlayEventDetail) => {
            if (detail.data.walletCreated) {
                this.saveWallet(detail.data.wallet);
            }
        });
    }

    public async presentModal(wallet: Wallet) {
        const modal = await this.modalController.create({
            component: CreateWalletModalPage,
            componentProps: {
                wallet: wallet,
            }
        });
        return await modal.onDidDismiss();
    }


}
