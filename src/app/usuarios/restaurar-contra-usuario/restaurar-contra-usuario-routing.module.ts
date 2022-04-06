import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurarContraUsuarioPage } from './restaurar-contra-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: RestaurarContraUsuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestaurarContraUsuarioPageRoutingModule {}
