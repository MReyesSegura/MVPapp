import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StatementsPageRoutingModule } from './statements-routing.module';

import { StatementsPage } from './statements.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StatementsPageRoutingModule
  ],
  declarations: [StatementsPage]
})
export class StatementsPageModule {}
