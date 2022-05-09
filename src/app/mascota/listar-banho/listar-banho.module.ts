import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarBanhoPageRoutingModule } from './listar-banho-routing.module';

import { ListarBanhoPage } from './listar-banho.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarBanhoPageRoutingModule
  ],
  declarations: [ListarBanhoPage]
})
export class ListarBanhoPageModule {}
