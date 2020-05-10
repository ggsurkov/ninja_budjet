import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HistoryTabPage} from './history-tab.page';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild([{path: '', component: HistoryTabPage}])
    ],
    exports: [
        HistoryTabPage
    ],
    declarations: [HistoryTabPage]
})
export class Tab2PageModule {
}
