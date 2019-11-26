import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {MyGoalPageRoutingModule} from './my-goal-routing.module';

import {MyGoalPage} from './my-goal.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        MyGoalPageRoutingModule
    ],
    declarations: [MyGoalPage]
})
export class MyGoalPageModule {
}
