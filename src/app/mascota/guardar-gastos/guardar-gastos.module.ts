import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuardarGastosPageRoutingModule } from './guardar-gastos-routing.module';

import { GuardarGastosPage } from './guardar-gastos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuardarGastosPageRoutingModule
  ],
  declarations: [GuardarGastosPage]
})
export class GuardarGastosPageModule {}
