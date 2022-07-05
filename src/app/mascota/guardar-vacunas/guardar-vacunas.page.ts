import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IonDatetime } from '@ionic/angular';
import { format, parseISO } from 'date-fns';
import { MascotavacunaService } from 'src/app/services/mascotavacuna.service';

@Component({
  selector: 'app-guardar-vacunas',
  templateUrl: './guardar-vacunas.page.html',
  styleUrls: ['./guardar-vacunas.page.scss'],
})
export class GuardarVacunasPage implements OnInit {
  @ViewChild(IonDatetime, { static: true }) datetime: IonDatetime;
  dateValue = '';
  dateValue2 = '';
  private codigo_mas;
  private codigo_vac;
  registrovacuna = this.fb.group({
    vac_denominacion: ['', Validators.required],
    vac_fecha: [''],
    vac_notas: ['']
  });

  constructor(
    private fb: FormBuilder,
    private mascotavacunaService: MascotavacunaService,
    public router: Router,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.listarVacuna();
  }
  formatDate(value: string) {
    return format(parseISO(value), 'yyyy-MM-dd');
  }
  listarVacuna() {
    this.codigo_vac = this.activateRoute.snapshot.params.id;
    this.codigo_mas = this.activateRoute.snapshot.params.co;
    console.log("Esto es this.codigo de vacuna", this.codigo_vac);
    console.log("Esto es this.codigo de la mascota", this.codigo_mas);
    if (this.codigo_vac !== '0') {
      this.mascotavacunaService.getById(this.codigo_vac).subscribe((data) => {
        if (data.success) {
          console.log("DATOS",data);
          this.registrovacuna.setValue({
            vac_denominacion: data.vacuna.vac_denominacion,
            vac_fecha: data.vacuna.vac_fecha,
            vac_notas: data.vacuna.vac_notas,
          });
          console.log("Esto es despues de setear en registro vacuna",this.registrovacuna.value);
        }
      });
    }
  } 
  guardarVacuna() {
    console.log("Esto es registro vacuna ",this.registrovacuna.value);
    const vacunas = this.registrovacuna.value;
    console.log("Esto es vacunas",vacunas);
    this.codigo_vac = this.activateRoute.snapshot.params.id;
    this.codigo_mas = this.activateRoute.snapshot.params.co;
    console.log("Esto es this.codigo de vacuna", this.codigo_vac);
    console.log("Esto es this.codigo de la mascota", this.codigo_mas);
    const vacuna = {
      vac_codigo: this.codigo_vac === '0' ? null : Number(this.codigo_vac),
      vac_denominacion: vacunas.vac_denominacion,
      vac_fecha: vacunas.vac_fecha,
      vac_notas: vacunas.vac_notas,
      vac_mas_codigo: Number(this.codigo_mas),
    };
    console.log('Esto es Vacuna', vacuna);
      this.mascotavacunaService.create(vacuna).subscribe(async (data: any) => {
        console.log('DATA', vacuna);
        this.router.navigate(['/listar-vacunas/'+vacuna['vac_mas_codigo']]);
      });
  }
}
