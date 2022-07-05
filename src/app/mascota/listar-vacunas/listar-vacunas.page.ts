import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonList, ToastController } from '@ionic/angular';
import { MascotavacunaService } from 'src/app/services/mascotavacuna.service';

@Component({
  selector: 'app-listar-vacunas',
  templateUrl: './listar-vacunas.page.html',
  styleUrls: ['./listar-vacunas.page.scss'],
})
export class ListarVacunasPage implements OnInit {

  @ViewChild(IonList) ionList: IonList;
  vacuna = [];
  private codigo;
  
  constructor(private mascotavacunaService : MascotavacunaService,   private toastCtrl: ToastController ,
    private activateRoute: ActivatedRoute, public router: Router
    ) { }
  ngOnInit(){
   this.listarVacunas();
  }

  buscar(event) {
    const valor = event.detail.value;
    this.mascotavacunaService.Filter(valor).subscribe((data) => {
      console.log(data);
      if (data) {
        this.vacuna = data['vacunas'];
      } else {
        this.vacuna = [];
      }
    });
  }
  ionViewWillEnter() {
    this.listarVacunas();
  }
  listarVacunas(){
    this.codigo = this.activateRoute.snapshot.params.id;
    console.log("Esto es this.codigo", this.codigo);
    this.mascotavacunaService.Filter(this.codigo).subscribe(data=>{
      console.log("esto es data",data);
      if(data){
        this.vacuna = data['vacuna'];
      }else{
        this.vacuna= [];
      }
    });
    console.log("esto es vacuna",this.vacuna);
  }
  guardarvacuna(){
    this.codigo = this.activateRoute.snapshot.params.id;
    console.log("Esto es this.codigo", this.codigo);
    this.router.navigate(['/guardar-vacunas/0/'+this.codigo]);
  }
  borrarvacuna(codigo) {
    this.mascotavacunaService.delete(codigo).subscribe(async (data) => {
      const message = data['success']
        ? 'Vacuna #' + codigo + ' borrado con exito'
        : ' Error al eliminar, el registro esta siendo utilizado';
      const toast = await this.toastCtrl.create({
        message: 'Vacuna #' + codigo + ' borrado con exito',
        duration: 2000,
      });
      this.listarVacunas();

      toast.present();

     // this.ionList.closeSlidingItems();
   
    });
  }

}
