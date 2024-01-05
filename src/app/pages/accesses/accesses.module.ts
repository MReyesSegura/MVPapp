import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccessesPageRoutingModule } from './accesses-routing.module';

import { AccessesPage } from './accesses.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccessesPageRoutingModule
  ],
  declarations: [AccessesPage]
})
export class AccessesPageModule {}
