import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-cambiar-contra',
  templateUrl: './cambiar-contra.page.html',
  styleUrls: ['./cambiar-contra.page.scss'],
})
export class CambiarContraPage implements OnInit {
  private codigo;

  registrousuario = this.fb.group({
    usu_nombre: [''],
    usu_correo: [''],
    usu_contra: ['', Validators.required],
    usu_contra2: ['', Validators.required],
    usu_contra3: ['', Validators.required],
    usu_token: [''],
  });

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    public router: Router,
    private activateRoute: ActivatedRoute,
    private toastCtrl: ToastController
  ) {}

  ngOnInit() {

  }
  guardarUsuario() {
    this.codigo = this.activateRoute.snapshot.params.id;
    console.log('Esto es this.codigo', this.codigo);
    this.usuarioService.getById(this.codigo).subscribe(async (data) => {
      console.log('Esto es data', data);
      if (data.success) {
        const usuario = this.registrousuario.value;
        console.log('Esto es de usuario', usuario);
        if (
          usuario.usu_contra2 === usuario.usu_contra3 &&
          data.usuario.usu_contra == usuario.usu_contra
        ) {
          const usuarios = {
            usu_codigo: data.usuario.codigo,
            usu_nombre: data.usuario.usu_nombre,
            usu_correo: data.usuario.usu_correo,
            usu_contra: usuario.usu_contra2,
            usu_token: data.usuario.usu_token,
          };
          this.usuarioService.create(usuarios).subscribe(async (data: any) => {
            console.log('DATA', usuarios);
            this.registrousuario = this.fb.group({
              usu_nombre: [''],
              usu_correo: ['', Validators.required],
              usu_contra: ['', Validators.required],
              usu_contra2: ['', Validators.required],
              usu_token: [''],
            });
            this.router.navigate(['/login']);
          });
        } else {
          const toast = await this.toastCtrl.create({
            message:
              'LAS CONTRASEÑAS NUEVAS SON DIFERENTES O CONTRASEÑA ACTUAL ES INCORRECTA, VUELVE A INTENTAR',
            duration: 2000,
          });
          toast.present();
        }
      }
    });
  }
}
