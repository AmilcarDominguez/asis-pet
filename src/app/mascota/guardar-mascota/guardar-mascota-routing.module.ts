import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuardarMascotaPage } from './guardar-mascota.page';

const routes: Routes = [
  {
    path: '',
    component: GuardarMascotaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuardarMascotaPageRoutingModule {}
