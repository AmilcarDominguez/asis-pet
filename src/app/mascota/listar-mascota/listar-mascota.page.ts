import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList, ToastController } from '@ionic/angular';
import { MascotaService } from 'src/app/services/mascota.service';

@Component({
  selector: 'app-listar-mascota',
  templateUrl: './listar-mascota.page.html',
  styleUrls: ['./listar-mascota.page.scss'],
})
export class ListarMascotaPage implements OnInit {
  @ViewChild(IonList) ionList: IonList;
  mascota = [];
  constructor(private mascotaService : MascotaService,   private toastCtrl: ToastController) { }
  ngOnInit(){
   this.listarMascotas();
  }

  buscar(event) {
    const valor = event.detail.value;

    this.mascotaService.Filter(valor).subscribe((data) => {
      console.log(data);
      if (data) {
        this.mascota = data['mascotas'];
      } else {
        this.mascota = [];
      }
    });
  }
  ionViewWillEnter() {
    this.listarMascotas();
  }

  listarMascotas(){
    this.mascotaService.listMascotas().subscribe(data=>{
      console.log(data);
      if(data.success){
        this.mascota = data.mascota;
      }else{
        this.mascota= [];
      }
    });
  }

  borrarmascota(codigo) {
    this.mascotaService.delete(codigo).subscribe(async (data) => {
      const message = data['success']
        ? 'Mascota #' + codigo + ' borrado con exito'
        : ' Error al eliminar, el registro esta siendo utilizado';
      const toast = await this.toastCtrl.create({
        message: 'Mascota #' + codigo + ' borrado con exito',
        duration: 2000,
      });
      this.listarMascotas();

      toast.present();

     // this.ionList.closeSlidingItems();
   
    });
  }

}
