import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'; 

@Component({
  selector: 'app-emergencies',
  templateUrl: './emergencies.page.html',
  styleUrls: ['./emergencies.page.scss'],
})
export class EmergenciesPage implements OnInit {

  constructor(
    private navCtrl: NavController
    ) { }
  
    ngOnInit() {
    }
  
    back() {
      this.navCtrl.back()
    }

}
