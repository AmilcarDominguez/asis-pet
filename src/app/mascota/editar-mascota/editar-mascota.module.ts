import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarMascotaPageRoutingModule } from './editar-mascota-routing.module';

import { EditarMascotaPage } from './editar-mascota.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarMascotaPageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  declarations: [EditarMascotaPage]
})
export class EditarMascotaPageModule {}
