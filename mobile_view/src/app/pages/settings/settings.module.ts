import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';
import {SettingsPage} from './settings.page';
import {SettingsRoutingModule} from './settings-routing.module';
import {TranslateModule} from '@ngx-translate/core';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SettingsRoutingModule,
        TranslateModule
    ],
    declarations: [SettingsPage]
})
export class SettingsModule {
}
