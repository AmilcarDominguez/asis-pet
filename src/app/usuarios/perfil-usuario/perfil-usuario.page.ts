import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.page.html',
  styleUrls: ['./perfil-usuario.page.scss'],
})
export class PerfilUsuarioPage implements OnInit {
  private codigo;

  registrousuario = this.fb.group({
    usu_codigo:[],
    usu_nombre: ['', Validators.required],
    usu_correo: ['', Validators.required],
    usu_contra:[''],
    usu_token:[]
  });

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    public router: Router,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.listarUsuario();
  }
  listarUsuario() {
    this.codigo = this.activateRoute.snapshot.params.id;
    console.log("Esto es this.codigo", this.codigo);
    if (this.codigo !== '0') {
      this.usuarioService.getById(this.codigo).subscribe((data) => {
        console.log("Esto es data", data);
        if (data.success) {
          this.registrousuario.setValue({
            usu_codigo: this.codigo,
            usu_nombre: data.usuario.usu_nombre,
            usu_correo: data.usuario.usu_correo,
            usu_contra: data.usuario.usu_contra,
            usu_token: data.usuario.usu_token
          });
          console.log("Esto es despues de setear en registro usuario",this.registrousuario.value);
        }
      });
    }
  } 
  guardarUsuario() {
    console.log("Esto es registro usuario ",this.registrousuario.value);
    const usuario = this.registrousuario.value;
    console.log("Esto es usuario",usuario);
    const usuarios = {
      usu_codigo: this.codigo === '0' ? null : Number(this.codigo),
      usu_nombre: usuario.usu_nombre,
      usu_correo: usuario.usu_correo,
      usu_contra: usuario.usu_contra,
      usu_token: usuario.usu_token,
    };
    console.log('Esto es usuarios', usuarios);
      this.usuarioService.create(usuarios).subscribe(async (data: any) => {
        console.log('DATA', usuarios);
        this.router.navigate(['/menu/'+this.codigo]);
      });
  }

}
