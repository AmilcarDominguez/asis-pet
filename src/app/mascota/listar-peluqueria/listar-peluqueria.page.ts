import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonList, ToastController } from '@ionic/angular';
import { MascotapeluqueriaService } from 'src/app/services/mascotapeluqueria.service';

@Component({
  selector: 'app-listar-peluqueria',
  templateUrl: './listar-peluqueria.page.html',
  styleUrls: ['./listar-peluqueria.page.scss'],
})
export class ListarPeluqueriaPage implements OnInit {
  @ViewChild(IonList) ionList: IonList;
  peluqueria = [];
  private codigo;
  private texto ='';
  constructor(private mascotapeluqueriaService : MascotapeluqueriaService,   private toastCtrl: ToastController ,
    private activateRoute: ActivatedRoute, public router: Router
    ) { }
  ngOnInit(){
   this.listarPeluquerias();
  }

  buscar(event) {
    const valor = event.detail.value;
    this.mascotapeluqueriaService.Filter(valor,this.codigo).subscribe((data) => {
      console.log(data);
      if (data) {
        this.peluqueria = data['peluqueria'];
      } else {
        this.peluqueria = [];
      }
    });
  }
  ionViewWillEnter() {
    this.listarPeluquerias();
  }
  listarPeluquerias(){
    this.codigo = this.activateRoute.snapshot.params.id;
    console.log("Esto es this.codigo", this.codigo);
    this.mascotapeluqueriaService.Filter(this.texto,this.codigo).subscribe(data=>{
      console.log("esto es data",data);
      if(data){
        this.peluqueria = data['peluqueria'];
      }else{
        this.peluqueria= [];
      }
    });
    console.log("esto es peluqueria",this.peluqueria);
  }
  guardarpeluqueria(){
    this.codigo = this.activateRoute.snapshot.params.id;
    console.log("Esto es this.codigo", this.codigo);
    this.router.navigate(['/guardar-peluqueria/0/'+this.codigo]);
  }
  borrarpeluqueria(codigo) {
    this.mascotapeluqueriaService.delete(codigo).subscribe(async (data) => {
      const message = data['success']
        ? 'Peluqueria #' + codigo + ' borrado con exito'
        : ' Error al eliminar, el registro esta siendo utilizado';
      const toast = await this.toastCtrl.create({
        message: 'Peluqueria #' + codigo + ' borrado con exito',
        duration: 2000,
      });
      this.listarPeluquerias();

      toast.present();

     // this.ionList.closeSlidingItems();
   
    });
  }

}
