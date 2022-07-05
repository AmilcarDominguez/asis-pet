import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuardarVacunasPageRoutingModule } from './guardar-vacunas-routing.module';

import { GuardarVacunasPage } from './guardar-vacunas.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuardarVacunasPageRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  declarations: [GuardarVacunasPage]
})
export class GuardarVacunasPageModule {}
