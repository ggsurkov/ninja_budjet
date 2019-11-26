import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {MoneyTabPage} from './money-tab.page';

describe('Tab1Page', () => {
    let component: MoneyTabPage;
    let fixture: ComponentFixture<MoneyTabPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MoneyTabPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(MoneyTabPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
