import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {LanguageAndCurrencyPageRoutingModule} from './language-and-currency-routing.module';

import {LanguageAndCurrencyPage} from './language-and-currency.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        LanguageAndCurrencyPageRoutingModule
    ],
    declarations: [LanguageAndCurrencyPage]
})
export class LanguageAndCurrencyPageModule {
}
