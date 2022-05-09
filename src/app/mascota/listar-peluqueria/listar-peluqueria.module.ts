import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarPeluqueriaPageRoutingModule } from './listar-peluqueria-routing.module';

import { ListarPeluqueriaPage } from './listar-peluqueria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarPeluqueriaPageRoutingModule
  ],
  declarations: [ListarPeluqueriaPage]
})
export class ListarPeluqueriaPageModule {}
