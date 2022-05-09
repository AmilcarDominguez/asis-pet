import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarVacunasPageRoutingModule } from './listar-vacunas-routing.module';

import { ListarVacunasPage } from './listar-vacunas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarVacunasPageRoutingModule
  ],
  declarations: [ListarVacunasPage]
})
export class ListarVacunasPageModule {}
