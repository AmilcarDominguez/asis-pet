import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { MascotaService } from 'src/app/services/mascota.service';

@Component({
  selector: 'app-editar-mascota',
  templateUrl: './editar-mascota.page.html',
  styleUrls: ['./editar-mascota.page.scss'],
})
export class EditarMascotaPage implements OnInit {
  mascotas: any;
  actualizarMascotaForm: FormGroup;

  mas_codigo: any;
  mas_nombre: any;
  mas_tipo: any;
  mas_sexo: any;

  constructor(
    public registroService: MascotaService,
    public formBuilder: FormBuilder,
    public router: Router,
    public activatedRoute: ActivatedRoute
  ) {
    this.mas_codigo = this.activatedRoute.snapshot.paramMap.get('mas_codigo');
  }
  ngOnInit() {
    console.log('Este es el codigo', this.mas_codigo);
    this.actualizarMascotaForm = this.formBuilder.group({
      mas_nombre: [''],
      mas_tipo: [''],
      mas_sexo: [''],
    });
    this.getDato(this.mas_codigo);
  }
  getDato(mas_codigo){
    this.registroService.obtenerMascota(this.mas_codigo)
    .subscribe(res => {
      console.log('DATA',res);
    }
    );
  }
  onSubmit(){
    console.log(this.actualizarMascotaForm.value);
  }
  actualizarForm() {
    console.log('codigo metodo update', this.mas_codigo);
      this.registroService.actualizarMascota(this.mas_codigo, this.actualizarMascotaForm.value)
        .subscribe((res) => {
          console.log(res);
          this.actualizarMascotaForm.reset();
          //this.router.navigate(['/usuarios']);
        });

  }
}
