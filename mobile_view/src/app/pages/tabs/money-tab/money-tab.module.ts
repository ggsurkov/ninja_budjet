import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MoneyTabPage} from './money-tab.page';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild([{path: '', component: MoneyTabPage}]),
        TranslateModule
    ],
    exports: [
        MoneyTabPage
    ],
    declarations: [MoneyTabPage]
})
export class Tab1PageModule {
}
