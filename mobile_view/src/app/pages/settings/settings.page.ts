import {Component, OnInit} from '@angular/core';
import {LANGUAGES_TITLES} from '../../dictionary/language-type';
import {StorageService} from '../../storage/storage.service';
import {AppSettings} from '../../models/app-settings';
import {CURRENCY_TITLES} from '../../dictionary/currency-type';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.page.html',
    styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
    public languages: string[] = LANGUAGES_TITLES;
    public currency: string[] = CURRENCY_TITLES;
    public appSettings: AppSettings = {language: '', currency: ''};

    constructor(private storageService: StorageService) {
    }

    ngOnInit(): void {
        this.storageService.getObject('appSettings').then((appSettings: AppSettings) => {
            this.appSettings.language = appSettings.language;
            this.appSettings.currency = appSettings.currency;
        });
    }

    appSettingsChange(): void {
        this.storageService.setObject('appSettings', this.appSettings);
    }

}
