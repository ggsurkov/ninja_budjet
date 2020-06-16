import {Component, OnInit} from '@angular/core';
import {LANGUAGES_TITLES} from '../../dictionary/language-type';
import {StorageService} from '../../storage/storage.service';
import {AppSettings} from '../../models/app-settings';
import {CURRENCY_TITLES} from '../../dictionary/currency-type';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.page.html',
    styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
    public languages: string[] = LANGUAGES_TITLES;
    public currency: string[] = CURRENCY_TITLES;
    public appSettings: AppSettings = {language: '', currency: ''};
    public currentLang: string;

    constructor(private storageService: StorageService,
                private translateService: TranslateService) {
    }

    ngOnInit(): void {
        this.storageService.getObject('appSettings').then((appSettings: AppSettings) => {
            this.appSettings.language = appSettings.language;
            this.currentLang = appSettings.language;
            this.appSettings.currency = appSettings.currency;
        });
    }

    languageChange(event: any): void {
        const chosenLang: string = event.detail.value;
        if (chosenLang !== this.appSettings.language) {
            this.appSettings.language = chosenLang;
            this.currentLang = chosenLang;
            this.storageService.setObject('appSettings', this.appSettings).then(() => {
                this.translateService.use(this.appSettings.language).subscribe(() => {
                    location.reload(); // reload app.component, because to need refresh sideMenu
                });
            });
        }
    }

}
