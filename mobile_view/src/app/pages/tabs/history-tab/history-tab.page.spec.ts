import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {NoteTabPage} from './note-tab.page';

describe('Tab2Page', () => {
    let component: NoteTabPage;
    let fixture: ComponentFixture<NoteTabPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NoteTabPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(NoteTabPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
