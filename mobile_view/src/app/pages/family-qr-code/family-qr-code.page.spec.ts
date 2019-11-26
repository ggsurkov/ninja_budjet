import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {FamilyQrCodePage} from './family-qr-code.page';

describe('FamilyQrCodePage', () => {
    let component: FamilyQrCodePage;
    let fixture: ComponentFixture<FamilyQrCodePage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FamilyQrCodePage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(FamilyQrCodePage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
