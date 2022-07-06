import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.page.html',
  styleUrls: ['../login/login.page.scss'],
})
export class RegistroUsuarioPage implements OnInit {

  
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
    private alertController: AlertController

  ) { }

  ngOnInit() {
    this.listarUsuario();
  }

  async guardarUsuario() {
    const usuario = this.registrousuario.value;

    if (usuario.usu_contra !== usuario.usu_contra2) {
      const alert = this.alertController.create({
        message: 'Las contraseñas son distintas'
      });
      (await alert).present();
      return;
    }
    const usuarios = {
      usu_codigo: this.codigo === '0' ? null : Number(this.codigo),
      usu_nombre: usuario.usu_nombre,
      usu_correo: usuario.usu_correo,
      usu_contra: usuario.usu_contra
      };
   
    this.usuarioService.create(usuarios).subscribe(async (data: any) => {
      console.log('DATA', usuarios);
      this.router.navigate(['/login']);
    });
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
            usu_contra2: data.usuario.usu_contra2
          });
          console.log(data);
        }
      });
    }
  }

}
