import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, IonList, ToastController } from '@ionic/angular';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.page.html',
  styleUrls: ['../login/login.page.scss'],
})
export class RegistroUsuarioPage implements OnInit {
  @ViewChild(IonList) ionList: IonList;
  private codigo;

  registrousuario = this.fb.group({
    usu_nombre: [''],
    usu_correo: ['', Validators.required],
    usu_contra: ['', Validators.required],
    usu_contra2: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    public router: Router,
    private activateRoute: ActivatedRoute,
    private toastCtrl: ToastController
  ) {}

  ngOnInit() {
    this.listarUsuario();
  }

  async guardarUsuario() {
    const usuario = this.registrousuario.value;
    console.log('Esto es de usuario', usuario);
    if (usuario.usu_contra !== usuario.usu_contra2) {
      const toast = await this.toastCtrl.create({
        message: 'LAS CONTRASEÑAS SON DIFERENTES, VUELVE A INTENTAR',
        duration: 2000,
      });
      toast.present();
    } else {
      const usuarios = {
        usu_codigo: this.codigo === '0' ? null : Number(this.codigo),
        usu_nombre: usuario.usu_nombre,
        usu_correo: usuario.usu_correo,
        usu_contra: usuario.usu_contra,
      };
      this.usuarioService.create(usuarios).subscribe(async (data: any) => {
        console.log('DATA', usuarios);
        this.registrousuario = this.fb.group({
          usu_nombre: [''],
          usu_correo: ['', Validators.required],
          usu_contra: ['', Validators.required],
          usu_contra2: ['', Validators.required],
        });
        this.router.navigate(['/login']);
      });
    }
  }
  listarUsuario() {
    this.codigo = this.activateRoute.snapshot.params.id;
    if (this.codigo !== '0') {
      this.usuarioService.getById(this.codigo).subscribe((data) => {
        if (data.success) {
          this.registrousuario.setValue({
            usu_nombre: data.usuario.usu_nombre,
            usu_correo: data.usuario.usu_correo,
            usu_contra: data.usuario.usu_contra,
            usu_contra2: data.usuario.usu_contra2,
          });
          console.log('Esto es el listado de usuarios', data);
        }
      });
    }
  }
}
