import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
    },
    {
        path: 'wallets',
        loadChildren: () => import('./pages/wallets/wallets.module').then(m => m.WalletsPageModule)
    },
    {
        path: 'my-goal',
        loadChildren: () => import('./pages/my-goal/my-goal.module').then(m => m.MyGoalPageModule)
    },
    {
        path: 'family-qr-code',
        loadChildren: () => import('./pages/family-qr-code/family-qr-code.module').then(m => m.FamilyQrCodePageModule)
    },
    {
        path: 'language-and-currency',
        loadChildren: () => import('./pages/language-and-currency/language-and-currency.module').then(m => m.LanguageAndCurrencyPageModule)
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
