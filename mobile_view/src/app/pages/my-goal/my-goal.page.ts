import {Component} from '@angular/core';
import {StorageService} from '../../storage/storage.service';
import {createDefaultGoal, Goal} from '../../models/goal';
import {ModalController, ToastController} from '@ionic/angular';
import {GoalModalPage} from './goal-modal/goal-modal.page';
import {OverlayEventDetail} from '@ionic/core';

@Component({
    selector: 'app-my-goal',
    templateUrl: './my-goal.page.html',
    styleUrls: ['./my-goal.page.scss'],
})
export class MyGoalPage {
    public goal: Goal;
    public goalProgress: number;
    private goalModal: HTMLIonModalElement;

    constructor(private storageService: StorageService,
                private modalController: ModalController,
                private toastController: ToastController) {
    }

    ionViewDidEnter() {
        this.storageService.getObject('goal').then((data: Goal) => {
            this.goal = data;
            this.goalProgress = this.calculateProgressBar(data);
        });
    }

    public createNewGoal(): void {
        this.presentModal(createDefaultGoal()).then(() => {
            this.goalModal.onDidDismiss().then((modalOutput: OverlayEventDetail) => {
                if (modalOutput.data.goalChanged) {
                    this.storageService.setObject('goal', modalOutput.data.goal).then(() => {
                        this.goal = modalOutput.data.goal;
                        this.goalProgress = this.calculateProgressBar(modalOutput.data.goal);
                        this.presentToast('Goal: ' + modalOutput.data.goal.name + ' created successfully!');
                    });
                }
            });
        });
    }

    public editGoal(goal: Goal): void {
        this.presentModal(goal).then(() => {
            this.goalModal.onDidDismiss().then((modalOutput: OverlayEventDetail) => {
                if (modalOutput.data.goalChanged) {
                    this.storageService.setObject('goal', modalOutput.data.goal).then(() => {
                        Object.assign(this.goal, modalOutput.data.goal);
                        this.goalProgress = this.calculateProgressBar(modalOutput.data.goal);
                        this.presentToast('Goal: ' + modalOutput.data.goal.name + ' saved successfully!');
                    });
                }
            });
        });
    }

    public async presentModal(goal: Goal) {
        const modal: HTMLIonModalElement = await this.modalController.create({
            component: GoalModalPage,
            componentProps: {
                goal,
            }
        });
        await modal.present();
        this.goalModal = modal;
    }

    async presentToast(message: string): Promise<any> {
        const toast = await this.toastController.create({
            message,
            duration: 2000
        });
        return toast.present();
    }

    private calculateProgressBar(goal: Goal): number {
        let progressNumberCount: number;
        if (goal) {
            progressNumberCount = this.goal.currentValue / this.goal.wonValue;
        }
        return progressNumberCount;
    }
}
