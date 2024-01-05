import { Component, OnInit } from '@angular/core'
import { NavController } from '@ionic/angular'

@Component({
    selector: 'app-payments',
    templateUrl: './payments.page.html',
    styleUrls: ['./payments.page.scss'],
})
export class PaymentsPage implements OnInit {
    constructor(private navCtrl: NavController) {}

    ngOnInit() {}

    back() {
        this.navCtrl.back()
    }
}
