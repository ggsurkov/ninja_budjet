import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {MyGoalPageRoutingModule} from './my-goal-routing.module';

import {MyGoalPage} from './my-goal.page';
import {GoalModalPage} from './goal-modal/goal-modal.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        MyGoalPageRoutingModule
    ],
    entryComponents: [GoalModalPage],
    declarations: [MyGoalPage, GoalModalPage]
})
export class MyGoalPageModule {
}
