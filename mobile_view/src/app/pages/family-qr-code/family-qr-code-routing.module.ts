import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {FamilyQrCodePage} from './family-qr-code.page';

const routes: Routes = [
    {
        path: '',
        component: FamilyQrCodePage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class FamilyQrCodePageRoutingModule {
}
