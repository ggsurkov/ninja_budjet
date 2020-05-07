import {Component, NgZone, OnInit, ViewChild} from '@angular/core';
import {createNewWallet, Wallet} from '../../models/wallet';
import {getDefaultWalletConfigKeys, WalletConfigKeyI} from '../../config/default-wallet-config';
import {ModalController, ToastController} from '@ionic/angular';
import {WalletModalPage} from './wallet-modal/wallet-modal.page';
import {OverlayEventDetail} from '@ionic/core';


@Component({
    selector: 'app-wallets',
    templateUrl: './wallets.page.html',
    styleUrls: ['./wallets.page.scss'],
})
export class WalletsPage implements OnInit {
    public wallets: Wallet[] = [];
    public mainWallet: Wallet;
    public defaultWalletConfigKeys: WalletConfigKeyI[];
    public walletModal: HTMLIonModalElement;
    @ViewChild('ionRadioGroup', {static: true}) public ionRadioGroup: any;

    constructor(private modalController: ModalController,
                private zone: NgZone,
                public toastController: ToastController) {
    }

    ngOnInit() {
        this.wallets.push(createNewWallet('First Wallet'));
        this.wallets.push(createNewWallet());
        this.wallets.push(createNewWallet());
        this.wallets.push(createNewWallet());
        this.wallets.push(createNewWallet());
        this.mainWallet = this.wallets[0];
        this.defaultWalletConfigKeys = getDefaultWalletConfigKeys();
    }

    public chooseWallet(guid: string): void {
        if (guid) {
            this.mainWallet = this.wallets.find((wallet: Wallet) => wallet.guid === guid);
        }
        if (!guid) {
            this.ionRadioGroup.el.value = this.mainWallet.guid;
        }
    }

    public createWallet(): void {
        this.presentModal(createNewWallet()).then(() => {
            this.walletModal.onDidDismiss().then((modalOutput: OverlayEventDetail) => {
                if (modalOutput.data.walletCreated) {
                    this.wallets.unshift(modalOutput.data.wallet);
                    this.chooseWallet(modalOutput.data.wallet.guid);
                    this.presentToast('Wallet ' + modalOutput.data.wallet.walletConfig.name + ' created successfully!');
                }
            });
        });
    }

    public editWallet(wallet: Wallet): void {
        this.presentModal(wallet);
    }

    public async presentModal(wallet: Wallet) {
        const modal: HTMLIonModalElement = await this.modalController.create({
            component: WalletModalPage,
            componentProps: {
                wallet,
            }
        });
        await modal.present();
        this.walletModal = modal;
    }

    async presentToast(message: string): Promise<any> {
        const toast = await this.toastController.create({
            message: message,
            duration: 2000
        });
        toast.present();
    }


}
