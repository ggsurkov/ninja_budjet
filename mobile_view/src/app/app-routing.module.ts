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
        path: 'family',
        loadChildren: () => import('./pages/family/family.module').then(m => m.FamilyModule)
    },
    {
        path: 'settings',
        loadChildren: () => import('./pages/settings/settings.module').then(m => m.SettingsModule)
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
