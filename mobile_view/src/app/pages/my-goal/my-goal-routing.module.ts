import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MyGoalPage} from './my-goal.page';

const routes: Routes = [
    {
        path: '',
        component: MyGoalPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MyGoalPageRoutingModule {
}
