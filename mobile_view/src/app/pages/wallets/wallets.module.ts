import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {WalletsPageRoutingModule} from './wallets-routing.module';

import {WalletsPage} from './wallets.page';
import {CreateWalletModalPage} from './create-wallet-modal/create-wallet-modal.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        WalletsPageRoutingModule
    ],
    declarations: [WalletsPage, CreateWalletModalPage]
})
export class WalletsPageModule {
}
