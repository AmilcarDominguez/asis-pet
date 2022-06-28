import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ListarMascotaPageRoutingModule } from './listar-mascota-routing.module';
import { ListarMascotaPage } from './listar-mascota.page';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarMascotaPageRoutingModule,
  ],
  declarations: [ListarMascotaPage]
})
export class ListarMascotaPageModule {}
