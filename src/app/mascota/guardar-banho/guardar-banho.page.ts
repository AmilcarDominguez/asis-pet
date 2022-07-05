import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IonDatetime } from '@ionic/angular';
import { format, parseISO } from 'date-fns';
import { MascotabanhoService } from 'src/app/services/mascotabanho.service';

@Component({
  selector: 'app-guardar-banho',
  templateUrl: './guardar-banho.page.html',
  styleUrls: ['./guardar-banho.page.scss'],
})
export class GuardarBanhoPage implements OnInit {
  @ViewChild(IonDatetime, { static: true }) datetime: IonDatetime;
  dateValue = '';
  dateValue2 = '';
  private codigo_mas;
  private codigo_ban;
  registrobanho = this.fb.group({
    ban_fecha: ['', Validators.required],
    ban_notas: [''],
  });

  constructor(
    private fb: FormBuilder,
    private mascotabanhoService: MascotabanhoService,
    public router: Router,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.listarBanho();
  }
  formatDate(value: string) {
    return format(parseISO(value), 'yyyy-MM-dd');
  }
  listarBanho() {
    this.codigo_ban = this.activateRoute.snapshot.params.id;
    this.codigo_mas = this.activateRoute.snapshot.params.co;
    console.log("Esto es this.codigo del banho", this.codigo_ban);
    console.log("Esto es this.codigo de la mascota", this.codigo_mas);
    if (this.codigo_ban !== '0') {
      this.mascotabanhoService.getById(this.codigo_ban).subscribe((data) => {
        if (data.success) {
          console.log("DATOS",data);
          this.registrobanho.setValue({
            ban_fecha: data.banho.ban_fecha,
            ban_notas: data.banho.ban_notas
          });
          console.log("Esto es despues de setear en registro banho",this.registrobanho.value);
        }
      });
    }
  } 
  guardarBanho() {
    console.log("Esto es registro banho ",this.registrobanho.value);
    const banhos = this.registrobanho.value;
    console.log("Esto es banhos",banhos);
    this.codigo_ban = this.activateRoute.snapshot.params.id;
    this.codigo_mas = this.activateRoute.snapshot.params.co;
    console.log("Esto es this.codigo del banho", this.codigo_ban);
    console.log("Esto es this.codigo de la mascota", this.codigo_mas);
    const banho = {
      ban_codigo: this.codigo_ban === '0' ? null : Number(this.codigo_ban),
      ban_fecha: banhos.ban_fecha,
      ban_notas: banhos.ban_notas,
      ban_mas_codigo: Number(this.codigo_mas),
    };
    console.log('Esto es Banho', banho);
      this.mascotabanhoService.create(banho).subscribe(async (data: any) => {
        console.log('DATA', banho);
        this.router.navigate(['/listar-banho/'+banho['ban_mas_codigo']]);
      });
  }
}
