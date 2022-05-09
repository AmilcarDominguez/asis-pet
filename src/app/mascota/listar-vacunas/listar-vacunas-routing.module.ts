import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarVacunasPage } from './listar-vacunas.page';

const routes: Routes = [
  {
    path: '',
    component: ListarVacunasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarVacunasPageRoutingModule {}
