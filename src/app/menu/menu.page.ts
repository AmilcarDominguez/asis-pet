import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  private codigo;
  private token;
  constructor(
    private usuarioService: UsuarioService,
    public router: Router,
    private activateRoute: ActivatedRoute,
    private toastCtrl: ToastController) { }
  ngOnInit(){
  }
  salirUsuario() {
    this.codigo = this.activateRoute.snapshot.params.id;
    console.log("ESte es this.codigo",this.codigo);
    this.usuarioService.logout(this.codigo).subscribe(async (data)=>{
      console.log("Esto es",data);
      if(data['success']){
        this.router.navigate(['/login']);
      }else{
        const toast = await this.toastCtrl.create({
          message: data['error'],
          duration: 2000,
        });
        toast.present();
      }
    });
  }
  perfilUsuario(){
    this.codigo = this.activateRoute.snapshot.params.id;
    console.log("ESte es this.codigo",this.codigo);
    this.router.navigate(['/perfil-usuario/'+this.codigo]);
  }
  mascotaUsuario(){
    this.codigo = this.activateRoute.snapshot.params.id;
    console.log("ESte es this.codigo",this.codigo);
    this.router.navigate(['/listar-mascota/'+this.codigo]);
  }
}
