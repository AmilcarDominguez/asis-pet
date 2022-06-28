import { Component, OnInit } from '@angular/core';
import { MascotaService } from 'src/app/services/mascota.service';
@Component({
  selector: 'app-listar-mascota',
  templateUrl: './listar-mascota.page.html',
  styleUrls: ['./listar-mascota.page.scss'],
})
export class ListarMascotaPage implements OnInit {
  users;
  mas_codigo: number;
  constructor(private registroService: MascotaService) {}

  ngOnInit() {
    this.listarMascotas();
  }
  ionViewWillEnter(){
    this.listarMascotas();
  }
  listarMascotas(){
    this.registroService.listarMascota()
    .subscribe((data ) => {
      console.log(data);
      this.users = data['mascota'];
      //console.log('codigoooos',this.users['usu_codigo'])
      for (const mas_codigo in this.users) {
        if (Object.prototype.hasOwnProperty.call(this.users, mas_codigo)) {
          const element = this.users[mas_codigo];
          console.log(element.mas_codigo);
        }
      }
    });
  }
  buscar(event){
    const valor = event.detail.value;

    if(valor && valor.trim().length>0){
      this.registroService.buscarMascota(valor)
      .subscribe(data => {
        console.log(data);
        if(data){
          this.users = data['mascota'];
        }else{
          this.users = [];
        }
      });
    }
    else{
      this.registroService.listarMascota().subscribe(data=>{
        if(data){
          this.users = data['mascota'];
        }else{
          this.users = [];
        }
      })
    }
  }
  eliminarMascota(mascotas, i, slidingItem){
    console.log('eliminar, eliminar');
    if(window.confirm('Seguro que quieres eliminar?')){
      this.registroService.eliminarMascotaService(mascotas.mas_codigo)
      .subscribe(() => {
        this.users.splice(i,1);
        slidingItem.close();
        this.ionViewWillEnter();
        console.log('Mascota eliminado!');
      });
    }
  }
}
