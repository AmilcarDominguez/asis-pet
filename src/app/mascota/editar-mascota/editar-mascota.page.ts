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
  private codigo_mas;
  private codigo_usu;
  registromascota = this.fb.group({
    mas_codigo:[],
    mas_nombre: ['', Validators.required],
    mas_sexo: [''],
    mas_raza: [''],
    mas_fecha_nacimiento: [''],
    mas_notas: [''],
    mas_tipo: [''],
    mas_usu_codigo: [''],
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
    this.codigo_mas = this.activateRoute.snapshot.params.id;
    this.codigo_usu = this.activateRoute.snapshot.params.co;
    console.log("Esto es this.codigo de mascota", this.codigo_mas);
    console.log("Esto es this.codigo del usuario", this.codigo_usu);
    if (this.codigo_mas !== '0') {
      this.mascotaService.getById(this.codigo_mas).subscribe((data) => {
        if (data.success) {
          console.log("DATOS",data);
          this.registromascota.setValue({
            mas_codigo: this.codigo_mas,
            mas_nombre: data.mascota.mas_nombre,
            mas_sexo: data.mascota.mas_sexo,
            mas_raza: data.mascota.mas_raza,
            mas_fecha_nacimiento: data.mascota.mas_fecha_nacimiento,
            mas_notas: data.mascota.mas_notas,
            mas_tipo: data.mascota.mas_tipo,
            mas_usu_codigo: data.mascota.mas_usu_codigo,
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
    this.codigo_mas = this.activateRoute.snapshot.params.id;
    this.codigo_usu = this.activateRoute.snapshot.params.co;
    console.log("Esto es this.codigo de mascota", this.codigo_mas);
    console.log("Esto es this.codigo del usuario", this.codigo_usu);
    const mascota = {
      mas_codigo: this.codigo_mas === '0' ? null : Number(this.codigo_mas),
      mas_nombre: mascotas.mas_nombre,
      mas_sexo: mascotas.mas_sexo,
      mas_raza: mascotas.mas_raza,
      mas_fecha_nacimiento: mascotas.mas_fecha_nacimiento,
      mas_notas: mascotas.mas_notas,
      mas_tipo: mascotas.mas_tipo,
      mas_usu_codigo: Number(this.codigo_usu),
    };
    console.log('Esto es Mascota', mascota);
      this.mascotaService.create(mascota).subscribe(async (data: any) => {
        console.log('DATA', mascota);
        this.router.navigate(['/listar-mascota/'+mascota['mas_usu_codigo']]);
      });
  }
}
