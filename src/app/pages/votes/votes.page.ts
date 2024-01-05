import { Component, OnInit } from '@angular/core'
import { NavController } from '@ionic/angular'

@Component({
    selector: 'app-votes',
    templateUrl: './votes.page.html',
    styleUrls: ['./votes.page.scss'],
})
export class VotesPage implements OnInit {
    constructor(private navCtrl: NavController) {}

    ngOnInit() {}

    back() {
        this.navCtrl.back()
    }
}
