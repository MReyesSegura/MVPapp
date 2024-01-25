import { Component, OnInit } from '@angular/core'
import { NavController } from '@ionic/angular'
import { UtilService } from 'src/app/services/util.service'

@Component({
    selector: 'app-profile',
    templateUrl: './profile.page.html',
    styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
    language: string = 'Español'
    cfdi: string = 'false'
    profileActive: boolean = true
    passwordActive: boolean = false

    constructor(private navCtrl: NavController, private util: UtilService) {}

    ngOnInit() {}

    goToPassword() {
        this.profileActive = false
        this.passwordActive = true
    }

    goToProfile() {
        this.profileActive = true
        this.passwordActive = false
    }

    back() {
        this.navCtrl.back()
    }
}
