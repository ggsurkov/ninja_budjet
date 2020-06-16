import {Component} from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import {StorageService} from './storage/storage.service';
import {TranslateService} from '@ngx-translate/core';
import {AppSettings} from './models/app-settings';
import {SideMenuService} from './services/side-menu-service.service';

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
        private sideMenuService: SideMenuService
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

    public initSideMenu() {
        this.sideMenuService.translateSideMenu().then((data) => {
            this.sideMenuNavigatePages = data;
        });
    }

}
