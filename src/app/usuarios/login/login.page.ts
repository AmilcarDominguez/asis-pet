import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, IonList, ToastController } from '@ionic/angular';
import { UsuarioService } from 'src/app/services/usuario.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @ViewChild(IonList) ionList: IonList;
  usuario = [];
  loginusuario = this.fb.group({
    usu_correo: ['', Validators.required],
    usu_contra: ['', Validators.required],
  });
  constructor(private fb: FormBuilder,
    private usuarioService: UsuarioService,
    public router: Router,
    private activateRoute: ActivatedRoute,
    private toastCtrl: ToastController) { }
  ngOnInit(){
  }
  async loginUsuario() {
    this.usuarioService.login(
      this.loginusuario.value.usu_correo,this.loginusuario.value.usu_contra).subscribe(async data=>{
      console.log(data);
      if(data['success']){
        this.router.navigate(['/menu/'+data['usuario'].usu_codigo]);
      }else{
        const toast = await this.toastCtrl.create({
          message: data['error'],
          duration: 2000,
        });
        toast.present();
      }
    });
  }
}
