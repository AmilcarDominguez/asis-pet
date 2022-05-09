import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuardarPeluqueriaPageRoutingModule } from './guardar-peluqueria-routing.module';

import { GuardarPeluqueriaPage } from './guardar-peluqueria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuardarPeluqueriaPageRoutingModule
  ],
  declarations: [GuardarPeluqueriaPage]
})
export class GuardarPeluqueriaPageModule {}
