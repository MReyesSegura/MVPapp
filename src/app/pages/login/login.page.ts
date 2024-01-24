import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UtilService } from 'src/app/services/util.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user: string = ''
  password: string = ''

  constructor(
  private util: UtilService,
  private navCtrl: NavController,
  private router: Router
  ) { }

  ngOnInit() {
  }

doLogin() {
this.router.navigate(['home'])
}  

back() {
  this.navCtrl.back()
}

}
