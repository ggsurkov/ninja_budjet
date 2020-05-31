import {Component} from '@angular/core';
import {SocialSharing} from '@ionic-native/social-sharing';
import {Guid} from 'guid-typescript';
import {StorageService} from '../../storage/storage.service';
import {User} from '../../models/user';

@Component({
    selector: 'app-family',
    templateUrl: './family.page.html',
    styleUrls: ['./family.page.scss'],
})
export class FamilyPage {
    public user: User;

    constructor(private socialSharing: SocialSharing, private storageService: StorageService) {
    }

    ionViewDidEnter(): void {
        this.storageService.getObject('user').then((user: User) => {
            this.user = user;
        });
    }

    public socialShare(): void {
        this.socialSharing.share(this.user.familyToken).then(() => {
            console.log('Share success!');
        }).catch(() => {
            console.log('Share error!');
        });
    }

    public createFamilyToken(): void {
        this.user.familyToken = Guid.create().toString();
        this.storageService.setObject('user', this.user).then(() => {
        });
    }

    public saveFamilyToken(familyToken: string) {
        this.user.familyToken = familyToken;
        this.storageService.setObject('user', this.user).then(() => {
        });
    }

    public authByFacebook(): void {

    }

    public authByGoogle(): void {

    }

}
