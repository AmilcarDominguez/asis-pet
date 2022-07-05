import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IonDatetime } from '@ionic/angular';
import { format, parseISO } from 'date-fns';
import { MascotapeluqueriaService } from 'src/app/services/mascotapeluqueria.service';

@Component({
  selector: 'app-guardar-peluqueria',
  templateUrl: './guardar-peluqueria.page.html',
  styleUrls: ['./guardar-peluqueria.page.scss'],
})
export class GuardarPeluqueriaPage implements OnInit {
  @ViewChild(IonDatetime, { static: true }) datetime: IonDatetime;
  dateValue = '';
  dateValue2 = '';
  private codigo_mas;
  private codigo_pel;
  registropeluqueria = this.fb.group({
    pel_fecha: ['', Validators.required],
    pel_notas: [''],
  });

  constructor(
    private fb: FormBuilder,
    private mascotapeluqueriaService: MascotapeluqueriaService,
    public router: Router,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.listarPeluqueria();
  }
  formatDate(value: string) {
    return format(parseISO(value), 'yyyy-MM-dd');
  }
  listarPeluqueria() {
    this.codigo_pel = this.activateRoute.snapshot.params.id;
    this.codigo_mas = this.activateRoute.snapshot.params.co;
    console.log("Esto es this.codigo del peluqueria", this.codigo_pel);
    console.log("Esto es this.codigo de la mascota", this.codigo_mas);
    if (this.codigo_pel !== '0') {
      this.mascotapeluqueriaService.getById(this.codigo_pel).subscribe((data) => {
        if (data.success) {
          console.log("DATOS",data);
          this.registropeluqueria.setValue({
            pel_fecha: data.peluqueria.pel_fecha,
            pel_notas: data.peluqueria.pel_notas
          });
          console.log("Esto es despues de setear en registro peluqueria",this.registropeluqueria.value);
        }
      });
    }
  } 
  guardarPeluqueria() {
    console.log("Esto es registro peluqueria ",this.registropeluqueria.value);
    const peluquerias = this.registropeluqueria.value;
    console.log("Esto es peluquerias",peluquerias);
    this.codigo_pel = this.activateRoute.snapshot.params.id;
    this.codigo_mas = this.activateRoute.snapshot.params.co;
    console.log("Esto es this.codigo de peluqueria", this.codigo_pel);
    console.log("Esto es this.codigo de la mascota", this.codigo_mas);
    const peluqueria = {
      pel_codigo: this.codigo_pel === '0' ? null : Number(this.codigo_pel),
      pel_fecha: peluquerias.pel_fecha,
      pel_notas: peluquerias.pel_notas,
      pel_mas_codigo: Number(this.codigo_mas),
    };
    console.log('Esto es Peluqueria', peluqueria);
      this.mascotapeluqueriaService.create(peluqueria).subscribe(async (data: any) => {
        console.log('DATA', peluqueria);
        this.router.navigate(['/listar-peluqueria/'+peluqueria['pel_mas_codigo']]);
      });
  }

}
