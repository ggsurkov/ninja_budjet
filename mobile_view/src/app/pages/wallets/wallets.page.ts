import {Component, OnInit, ViewChild} from '@angular/core';
import {createNewWallet, Wallet} from '../../models/wallet';
import {getDefaultWalletConfigKeys, WalletConfigKeyI} from '../../config/default-wallet-config';
import {ModalController, ToastController} from '@ionic/angular';
import {WalletModalPage} from './wallet-modal/wallet-modal.page';
import {OverlayEventDetail} from '@ionic/core';
import {replaceInArrayByParam} from '../../utils/replace-in-array.util';
import {toCopy} from '../../utils/to-copy.util';
import {StorageService} from '../../storage/storage.service';


@Component({
    selector: 'app-wallets',
    templateUrl: './wallets.page.html',
    styleUrls: ['./wallets.page.scss'],
})
export class WalletsPage implements OnInit {

    public wallets: Wallet[] = [];
    public mainWallet: Wallet = null;
    public defaultWalletConfigKeys: WalletConfigKeyI[];
    public walletModal: HTMLIonModalElement;
    @ViewChild('ionRadioGroup', {static: true}) public ionRadioGroup: any;

    constructor(private modalController: ModalController,
                private toastController: ToastController,
                private storageService: StorageService) {
    }

    ngOnInit() {
        this.defaultWalletConfigKeys = getDefaultWalletConfigKeys();
        this.storageService.getObject('wallets').then((wallets: Wallet[]) => {
            this.wallets = wallets;
        });
        this.storageService.getObject('mainWallet').then((mainWallet: Wallet) => {
            this.mainWallet = mainWallet;
        });
    }


    public chooseWallet(guid: string): void {
        if (guid) {
            this.mainWallet = this.wallets.find((wallet) => wallet.guid === guid);
            this.storageService.setObject('mainWallet', this.mainWallet);
        }
    }

    public createWallet(): void {
        this.presentModal(createNewWallet()).then(() => {
            this.walletModal.onDidDismiss().then((modalOutput: OverlayEventDetail) => {
                if (modalOutput.data.walletChanged) {
                    this.wallets.push(modalOutput.data.wallet);
                    this.storageService.setObject('wallets', this.wallets).then(() => {
                        this.presentToast(modalOutput.data.wallet.walletConfig.title + ' created successfully!');
                    });
                }
            });
        });
    }

    public editWallet(editedWallet: Wallet): void {
        this.presentModal(toCopy(editedWallet)).then(() => {
            this.walletModal.onDidDismiss().then((modalOutput: OverlayEventDetail) => {
                if (modalOutput.data.walletChanged) {
                    const updatedWallets: Wallet[] = replaceInArrayByParam(this.wallets, modalOutput.data.wallet, 'guid');
                    this.storageService.setObject('wallets', updatedWallets).then(() => {
                        this.presentToast(modalOutput.data.wallet.walletConfig.title + ' edited successfully!');
                    });
                }
            });
        });
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
            message,
            duration: 2000
        });
        return toast.present();
    }

}
