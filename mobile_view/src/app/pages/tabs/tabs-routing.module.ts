import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TabsPage} from './tabs.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'money-tab',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('./money-tab/money-tab.module').then(m => m.Tab1PageModule)
                    }
                ]
            },
            {
                path: 'note-tab',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('./note-tab/note-tab.module').then(m => m.Tab2PageModule)
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/tabs/money-tab',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/money-tab',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TabsPageRoutingModule {
}
