import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private codigo;
  login = this.fb.group({
    usu_correo: ['', Validators.required],
    usu_contra: ['', Validators.required],
   
  });

  constructor( private fb: FormBuilder,
    private usuarioService: UsuarioService,
    public router: Router,
    private storage : Storage,
   private  alertController: AlertController) { }

  ngOnInit() {
  }


  async obtenerLogin( ){
    console.log("hola");
    this.storage.create();

    const valido = await this.usuarioService.login(this.login.value.usu_correo,this.login.value.usu_contra);

    if(valido){
      //navegar a pantalla principal
      this.router.navigate(['/menu']);
      
    }else{
      // alerta

      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        message:'Datos de usuario o contraseña incorrectos',
        buttons: ['OK']
      });
    
      await alert.present();

    }

  }

}
