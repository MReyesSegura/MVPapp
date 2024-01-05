import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.page.html',
  styleUrls: ['./directory.page.scss'],
})
export class DirectoryPage implements OnInit {

  constructor(
    private navCtrl: NavController
    ) { }
  
    ngOnInit() {
    }
  
    back() {
      this.navCtrl.back()
    }

}
