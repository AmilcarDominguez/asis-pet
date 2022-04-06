import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuardarMascotaPageRoutingModule } from './guardar-mascota-routing.module';

import { GuardarMascotaPage } from './guardar-mascota.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuardarMascotaPageRoutingModule
  ],
  declarations: [GuardarMascotaPage]
})
export class GuardarMascotaPageModule {}
