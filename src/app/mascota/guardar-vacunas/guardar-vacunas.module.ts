import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuardarVacunasPageRoutingModule } from './guardar-vacunas-routing.module';

import { GuardarVacunasPage } from './guardar-vacunas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuardarVacunasPageRoutingModule
  ],
  declarations: [GuardarVacunasPage]
})
export class GuardarVacunasPageModule {}
