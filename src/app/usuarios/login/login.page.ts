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
    const valido = await this.usuarioService.login(this.login.value.usu_correo,this.login.value.usu_contra);
    if (valido) {
      this.router.navigate(['/menu']);
    } else {
      const toast = await this.toastCtrl.create({
        message: 'LAS CONTRASEÑAS SON DIFERENTES, VUELVE A INTENTAR',
        duration: 2000,
      });
      toast.present();
    }
  }
}
