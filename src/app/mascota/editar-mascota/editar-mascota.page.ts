import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MascotaService } from 'src/app/services/mascota.service';



@Component({
  selector: 'app-editar-mascota',
  templateUrl: './editar-mascota.page.html',
  styleUrls: ['./editar-mascota.page.scss'],
})
export class EditarMascotaPage implements OnInit {
  private codigo;
  registromascota = this.fb.group({
    mas_codigo:[],
    mas_nombre: ['', Validators.required],
    mas_sexo: [''],
    mas_raza: [''],
    mas_fecha_nacimiento: [''],
    mas_notas: [''],
    mas_tipo: [''],
  });
  constructor(
    private fb: FormBuilder,
    private mascotaService: MascotaService,
    public router: Router,
    private activateRoute: ActivatedRoute
  ) {
    
  }
  ngOnInit() {
    this.listarMascota();
  } 
  listarMascota() {
    this.codigo = this.activateRoute.snapshot.params.id;
    console.log("Esto es this.codigo", this.codigo);
    if (this.codigo !== '0') {
      this.mascotaService.getById(this.codigo).subscribe((data) => {
        if (data.success) {
          this.registromascota.setValue({
            mas_codigo: this.codigo,
            mas_nombre: data.mascota.mas_nombre,
            mas_sexo: data.mascota.mas_sexo,
            mas_raza: data.mascota.mas_raza,
            mas_fecha_nacimiento: data.mascota.mas_fecha_nacimiento,
            mas_notas: data.mascota.mas_notas,
            mas_tipo: data.mascota.mas_tipo,
          });
          console.log("Esto es despues de setear en registro mascota",this.registromascota.value['mas_codigo']);
        }
      });
    }
  } 
  guardarMascota() {
    console.log("Esto es registro mascota ",this.registromascota.value);
    const mascotas = this.registromascota.value;
    console.log("Esto es mascotas",mascotas);
    const mascota = {
      mas_codigo: this.codigo === '0' ? null : Number(this.codigo),
      mas_nombre: mascotas.mas_nombre,
      mas_sexo: mascotas.mas_sexo,
      mas_raza: mascotas.mas_raza,
      mas_fecha_nacimiento: mascotas.mas_fecha_nacimiento,
      mas_notas: mascotas.mas_notas,
      mas_tipo: mascotas.mas_tipo,
    };
    console.log('Esto es Mascota', mascota);
      this.mascotaService.create(mascota).subscribe(async (data: any) => {
        console.log('DATA', mascota);
        this.router.navigate(['/listar-mascota']);
      });
  }
}
