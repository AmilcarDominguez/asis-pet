import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarMascotaPage } from './listar-mascota.page';

const routes: Routes = [
  {
    path: '',
    component: ListarMascotaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarMascotaPageRoutingModule {}
