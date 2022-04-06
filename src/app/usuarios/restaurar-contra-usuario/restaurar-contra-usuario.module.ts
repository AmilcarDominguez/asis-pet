import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestaurarContraUsuarioPageRoutingModule } from './restaurar-contra-usuario-routing.module';

import { RestaurarContraUsuarioPage } from './restaurar-contra-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestaurarContraUsuarioPageRoutingModule
  ],
  declarations: [RestaurarContraUsuarioPage]
})
export class RestaurarContraUsuarioPageModule {}
