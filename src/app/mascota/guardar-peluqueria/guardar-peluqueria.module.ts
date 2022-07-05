import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuardarPeluqueriaPageRoutingModule } from './guardar-peluqueria-routing.module';

import { GuardarPeluqueriaPage } from './guardar-peluqueria.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuardarPeluqueriaPageRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  declarations: [GuardarPeluqueriaPage]
})
export class GuardarPeluqueriaPageModule {}
