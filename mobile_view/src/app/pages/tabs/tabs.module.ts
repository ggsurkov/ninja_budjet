import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {TabsPageRoutingModule} from './tabs-routing.module';

import {TabsPage} from './tabs.page';
import {Tab1PageModule} from './money-tab/money-tab.module';
import {Tab2PageModule} from './history-tab/history-tab.module';
import {TranslateModule} from '@ngx-translate/core';

export const SHARED_DATA = {data: 'sharedData'};

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        TabsPageRoutingModule,
        Tab1PageModule,
        Tab2PageModule,
        TranslateModule
    ],
    declarations: [TabsPage]
})
export class TabsPageModule {
}
