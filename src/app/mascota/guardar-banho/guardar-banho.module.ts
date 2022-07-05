import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuardarBanhoPageRoutingModule } from './guardar-banho-routing.module';

import { GuardarBanhoPage } from './guardar-banho.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuardarBanhoPageRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  declarations: [GuardarBanhoPage]
})
export class GuardarBanhoPageModule {}
