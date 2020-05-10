import {Component, Input} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {Goal} from '../../../models/goal';

@Component({
    selector: 'app-goal-modal',
    templateUrl: './goal-modal.page.html',
    styleUrls: ['./goal-modal.page.scss'],
})

export class GoalModalPage {
    @Input() public goal: Goal;
    public modalTitle: string = 'Your Goal';
    public today: string;

    constructor(private modalCtrl: ModalController) {
    }

    ionViewDidEnter(): void {
    }

    toCreate(): void {
        this.modalCtrl.dismiss({
            goalChanged: true,
            goal: this.goal
        });
    }

    private dismissModal(): void {
        this.modalCtrl.dismiss({
            goalChanged: false,
            goal: this.goal
        });
    }
}
