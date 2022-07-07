import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  private codigo;
  private texto = '';
  constructor(private mascotaService : MascotaService,   private toastCtrl: ToastController, 
    private activateRoute: ActivatedRoute, public router: Router) { }
  ngOnInit(){
   this.listarMascotas();
  }

  buscar(event) {
    const valor = event.detail.value;
    this.mascotaService.Filter(valor,this.codigo).subscribe((data) => {
      console.log(data);
      if (data) {
        this.mascota = data['mascota'];
      } else {
        this.mascota = [];
      }
    });
  }
  ionViewWillEnter() {
    this.listarMascotas();
  }

  listarMascotas(){
    this.codigo = this.activateRoute.snapshot.params.id;
    console.log("Esto es this.codigo", this.codigo);
    this.mascotaService.Filter(this.texto,this.codigo).subscribe(data=>{
      console.log(data);
      if(data){
        this.mascota = data['mascota'];
      }else{
        this.mascota= [];
      }
    });
    console.log("esto esmascota",this.mascota);
  }
  guardarmascota(){
    this.codigo = this.activateRoute.snapshot.params.id;
    console.log("Esto es this.codigo", this.codigo);
    this.router.navigate(['/guardar-mascota/0/'+this.codigo]);
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
