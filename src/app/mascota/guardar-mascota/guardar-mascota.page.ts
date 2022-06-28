import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IonDatetime } from '@ionic/angular';
import { format, parseISO } from 'date-fns';
import { MascotaService } from 'src/app/services/mascota.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guardar-mascota',
  templateUrl: './guardar-mascota.page.html',
  styleUrls: ['./guardar-mascota.page.scss'],
})
export class GuardarMascotaPage implements OnInit {
  registroForm: FormGroup;
  @ViewChild(IonDatetime, { static: true }) datetime: IonDatetime;
  dateValue = '';
  dateValue2 = '';
  constructor(
    private formsBuilder: FormBuilder,
    private registroService: MascotaService,
    public router: Router
  ) {
    this.registroForm = this.formsBuilder.group({
      mas_nombre: [''],
      mas_tipo: [''],
      mas_sexo: [''],
      mas_raza: [''],
      mas_fecha_nacimiento: [''],
      mas_notas: [''],
    });
  }

  ngOnInit() {
    //console.log(this.registroForm);
  }
  crearMascota() {
    console.log(this.registroForm);
    this.registroService
      .crearMascota(this.registroForm.value)
      .subscribe((res) => {
        console.log(res);
      });
    this.router.navigate(['/listar-mascota']);
  }
  formatDate(value: string) {
    return format(parseISO(value), 'yyy-MM-dd');
  }
}
