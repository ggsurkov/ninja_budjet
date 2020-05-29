import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';
import {FamilyRoutingModule} from './family-routing.module';
import {FamilyPage} from './family.page';
import {TranslateModule} from '@ngx-translate/core';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        FamilyRoutingModule,
        TranslateModule
    ],
    declarations: [FamilyPage]
})
export class FamilyModule {
}
