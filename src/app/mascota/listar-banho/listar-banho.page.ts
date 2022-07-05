import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonList, ToastController } from '@ionic/angular';
import { MascotabanhoService } from 'src/app/services/mascotabanho.service';

@Component({
  selector: 'app-listar-banho',
  templateUrl: './listar-banho.page.html',
  styleUrls: ['./listar-banho.page.scss'],
})
export class ListarBanhoPage implements OnInit {
  @ViewChild(IonList) ionList: IonList;
  banho = [];
  private codigo;
  
  constructor(private mascotabanhoService : MascotabanhoService,   private toastCtrl: ToastController ,
    private activateRoute: ActivatedRoute, public router: Router
    ) { }
  ngOnInit(){
   this.listarBanhos();
  }

  buscar(event) {
    const valor = event.detail.value;
    this.mascotabanhoService.Filter(valor).subscribe((data) => {
      console.log(data);
      if (data) {
        this.banho = data['banhos'];
      } else {
        this.banho = [];
      }
    });
  }
  ionViewWillEnter() {
    this.listarBanhos();
  }
  listarBanhos(){
    this.codigo = this.activateRoute.snapshot.params.id;
    console.log("Esto es this.codigo", this.codigo);
    this.mascotabanhoService.Filter(this.codigo).subscribe(data=>{
      console.log("esto es data",data);
      if(data){
        this.banho = data['banho'];
      }else{
        this.banho= [];
      }
    });
    console.log("esto es banho",this.banho);
  }
  guardarbanho(){
    this.codigo = this.activateRoute.snapshot.params.id;
    console.log("Esto es this.codigo", this.codigo);
    this.router.navigate(['/guardar-banho/0/'+this.codigo]);
  }
  borrarbanho(codigo) {
    this.mascotabanhoService.delete(codigo).subscribe(async (data) => {
      const message = data['success']
        ? 'Banho #' + codigo + ' borrado con exito'
        : ' Error al eliminar, el registro esta siendo utilizado';
      const toast = await this.toastCtrl.create({
        message: 'Banho #' + codigo + ' borrado con exito',
        duration: 2000,
      });
      this.listarBanhos();

      toast.present();

     // this.ionList.closeSlidingItems();
   
    });
  }

}
