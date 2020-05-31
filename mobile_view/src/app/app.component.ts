import {Component} from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import {StorageService} from './storage/storage.service';
import {TranslateService} from '@ngx-translate/core';
import {AppSettings} from './models/app-settings';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
    public sideMenuNavigatePages: any[];

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private storageService: StorageService,
        private translateService: TranslateService,
    ) {
        this.initializeApp();
        this.initSideMenu();
    }

    private initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
        this.storageService.initDataApp({defaultMode: true});
        this.translateService.setDefaultLang('english');
        this.storageService.getObject('appSettings').then((appSettings: AppSettings) => {
            this.translateService.use(appSettings.language);
        });
    }

    private initSideMenu() {
        this.translateSideMenu();
    }

    private translateSideMenu() {
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
            this.setSideMenu(home, wallets, myGoal, family, settings);
        });
    }

    private setSideMenu(home, wallets, myGoal, family, settings) {
        this.sideMenuNavigatePages = [
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
