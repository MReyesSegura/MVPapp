import { Component, OnInit } from '@angular/core'
import { NavController } from '@ionic/angular'

@Component({
    selector: 'app-statements',
    templateUrl: './statements.page.html',
    styleUrls: ['./statements.page.scss'],
})
export class StatementsPage implements OnInit {
    constructor(private navCtrl: NavController) {}

    ngOnInit() {}

    back() {
        this.navCtrl.back()
    }
}
