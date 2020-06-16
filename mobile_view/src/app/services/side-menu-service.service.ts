import {Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Injectable()
export class SideMenuService {
    constructor(private translateService: TranslateService) {
    }

    public translateSideMenu(): Promise<any[]> {
        return new Promise<any[]>((resolve, reject) => {
            let sideMenu: any[] = [];
            let home: string = '';
            let wallets: string = '';
            let myGoal: string = '';
            let family: string = '';
            let settings: string = '';
            this.translateService.get(['Home']).subscribe(translation => {
                home = translation['Home'];
            });
            this.translateService.get(['Wallets']).subscribe(translation => {
                wallets = translation['Wallets'];
            });
            this.translateService.get(['My Goal']).subscribe(translation => {
                myGoal = translation['My Goal'];
            });
            this.translateService.get(['Family']).subscribe(translation => {
                family = translation['Family'];
            });
            this.translateService.get(['Settings']).subscribe(translation => {
                settings = translation['Settings'];
                sideMenu = this.setSideMenu(home, wallets, myGoal, family, settings);
                resolve(sideMenu);
            });
        });
    }

    private setSideMenu(home, wallets, myGoal, family, settings): any[] {
        return [
            {
                title: home,
                url: '',
                icon: 'home'
            },
            {
                title: wallets,
                url: '/wallets',
                icon: 'albums'
            },
            {
                title: myGoal,
                url: '/my-goal',
                icon: 'contract'
            },
            {
                title: family,
                url: '/family',
                icon: 'contacts'
            },
            {
                title: settings,
                url: '/settings',
                icon: 'hammer'
            },
        ];
    }
}
