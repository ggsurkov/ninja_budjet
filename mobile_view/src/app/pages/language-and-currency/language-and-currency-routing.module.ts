import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LanguageAndCurrencyPage} from './language-and-currency.page';

const routes: Routes = [
    {
        path: '',
        component: LanguageAndCurrencyPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LanguageAndCurrencyPageRoutingModule {
}
