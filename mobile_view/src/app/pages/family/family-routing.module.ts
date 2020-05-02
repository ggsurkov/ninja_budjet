import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FamilyPage} from './family.page';


const routes: Routes = [
    {
        path: '',
        component: FamilyPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class FamilyRoutingModule {
}
