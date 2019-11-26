import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {MyGoalPage} from './my-goal.page';

describe('MyGoalPage', () => {
    let component: MyGoalPage;
    let fixture: ComponentFixture<MyGoalPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MyGoalPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(MyGoalPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
