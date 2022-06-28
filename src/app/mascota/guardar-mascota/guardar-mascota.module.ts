import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuardarMascotaPageRoutingModule } from './guardar-mascota-routing.module';

import { GuardarMascotaPage } from './guardar-mascota.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuardarMascotaPageRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [GuardarMascotaPage]
})
export class GuardarMascotaPageModule {}
