import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarPeluqueriaPage } from './listar-peluqueria.page';

const routes: Routes = [
  {
    path: '',
    component: ListarPeluqueriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarPeluqueriaPageRoutingModule {}
