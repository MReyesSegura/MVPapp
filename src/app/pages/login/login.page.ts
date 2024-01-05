import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
  private util: UtilService,
  private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

back() {
  this.navCtrl.back()
}

}
