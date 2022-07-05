import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonList, ToastController } from '@ionic/angular';
import { MascotagastoService } from 'src/app/services/mascotagasto.service';

@Component({
  selector: 'app-listar-gastos',
  templateUrl: './listar-gastos.page.html',
  styleUrls: ['./listar-gastos.page.scss'],
})
export class ListarGastosPage implements OnInit {
  @ViewChild(IonList) ionList: IonList;
  gasto = [];
  private codigo;
  
  constructor(private mascotagastoService : MascotagastoService,   private toastCtrl: ToastController ,
    private activateRoute: ActivatedRoute, public router: Router
    ) { }
  ngOnInit(){
   this.listarGastos();
  }

  buscar(event) {
    const valor = event.detail.value;
    this.mascotagastoService.Filter(valor).subscribe((data) => {
      console.log(data);
      if (data) {
        this.gasto = data['gastos'];
      } else {
        this.gasto = [];
      }
    });
  }
  ionViewWillEnter() {
    this.listarGastos();
  }
  listarGastos(){
    this.codigo = this.activateRoute.snapshot.params.id;
    console.log("Esto es this.codigo", this.codigo);
    this.mascotagastoService.Filter(this.codigo).subscribe(data=>{
      console.log("esto es data",data);
      if(data){
        this.gasto = data['gasto'];
      }else{
        this.gasto= [];
      }
    });
    console.log("esto es gasto",this.gasto);
  }
  guardargasto(){
    this.codigo = this.activateRoute.snapshot.params.id;
    console.log("Esto es this.codigo", this.codigo);
    this.router.navigate(['/guardar-gastos/0/'+this.codigo]);
  }
  borrargasto(codigo) {
    this.mascotagastoService.delete(codigo).subscribe(async (data) => {
      const message = data['success']
        ? 'Gasto #' + codigo + ' borrado con exito'
        : ' Error al eliminar, el registro esta siendo utilizado';
      const toast = await this.toastCtrl.create({
        message: 'Gasto #' + codigo + ' borrado con exito',
        duration: 2000,
      });
      this.listarGastos();

      toast.present();

     // this.ionList.closeSlidingItems();
   
    });
  }

}
