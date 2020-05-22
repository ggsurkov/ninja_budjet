import {Component} from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import {sideMenuConfig} from './config/side-menu-config';
import {StorageService} from './storage/storage.service';
import {TranslateService} from '@ngx-translate/core';
import {AppSettings} from './models/app-settings';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
    public navigate: any;

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private storageService: StorageService,
        private translateService: TranslateService,
    ) {
        this.sideMenu();
        this.initializeApp();
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

    private sideMenu() {
        this.navigate = sideMenuConfig();
    }
}
