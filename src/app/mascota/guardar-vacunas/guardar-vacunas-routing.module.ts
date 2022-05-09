import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuardarVacunasPage } from './guardar-vacunas.page';

const routes: Routes = [
  {
    path: '',
    component: GuardarVacunasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuardarVacunasPageRoutingModule {}
