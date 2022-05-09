import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuardarBanhoPage } from './guardar-banho.page';

const routes: Routes = [
  {
    path: '',
    component: GuardarBanhoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuardarBanhoPageRoutingModule {}
