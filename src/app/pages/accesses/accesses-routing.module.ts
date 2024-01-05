import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccessesPage } from './accesses.page';

const routes: Routes = [
  {
    path: '',
    component: AccessesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccessesPageRoutingModule {}
