import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {WalletsPageRoutingModule} from './wallets-routing.module';

import {WalletsPage} from './wallets.page';
import {WalletModalPage} from './wallet-modal/wallet-modal.page';
import {WalletConfigComponent} from '../../components/wallet-config/wallet-config.component';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        WalletsPageRoutingModule,
        TranslateModule
    ],
    entryComponents: [WalletModalPage],
    declarations: [WalletsPage, WalletModalPage, WalletConfigComponent]
})
export class WalletsPageModule {
}
