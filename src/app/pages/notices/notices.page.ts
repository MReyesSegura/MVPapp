import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-notices',
  templateUrl: './notices.page.html',
  styleUrls: ['./notices.page.scss'],
})
export class NoticesPage implements OnInit {

  constructor(
    private navCtrl: NavController
    ) { }
  
    ngOnInit() {
    }
  
    back() {
      this.navCtrl.back()
    }
}
