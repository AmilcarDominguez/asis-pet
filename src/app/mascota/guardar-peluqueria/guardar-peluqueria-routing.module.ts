import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuardarPeluqueriaPage } from './guardar-peluqueria.page';

const routes: Routes = [
  {
    path: '',
    component: GuardarPeluqueriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuardarPeluqueriaPageRoutingModule {}
