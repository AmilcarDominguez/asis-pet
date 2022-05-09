import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuardarBanhoPageRoutingModule } from './guardar-banho-routing.module';

import { GuardarBanhoPage } from './guardar-banho.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuardarBanhoPageRoutingModule
  ],
  declarations: [GuardarBanhoPage]
})
export class GuardarBanhoPageModule {}
