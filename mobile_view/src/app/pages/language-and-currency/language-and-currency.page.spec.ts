import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {LanguageAndCurrencyPage} from './language-and-currency.page';

describe('LanguageAndCurrencyPage', () => {
    let component: LanguageAndCurrencyPage;
    let fixture: ComponentFixture<LanguageAndCurrencyPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LanguageAndCurrencyPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(LanguageAndCurrencyPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
