import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HistoryTabPage} from './history-tab.page';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild([{path: '', component: HistoryTabPage}]),
        TranslateModule
    ],
    exports: [
        HistoryTabPage
    ],
    declarations: [HistoryTabPage]
})
export class Tab2PageModule {
}
