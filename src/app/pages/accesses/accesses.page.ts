import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-accesses',
  templateUrl: './accesses.page.html',
  styleUrls: ['./accesses.page.scss'],
})
export class AccessesPage implements OnInit {

  constructor(
  private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  back() {
    this.navCtrl.back()
  }
  

}
