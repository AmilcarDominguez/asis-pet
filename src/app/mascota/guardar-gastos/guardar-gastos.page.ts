import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IonDatetime } from '@ionic/angular';
import { format, parseISO } from 'date-fns';
import { MascotagastoService } from 'src/app/services/mascotagasto.service';

@Component({
  selector: 'app-guardar-gastos',
  templateUrl: './guardar-gastos.page.html',
  styleUrls: ['./guardar-gastos.page.scss'],
})
export class GuardarGastosPage implements OnInit {
  @ViewChild(IonDatetime, { static: true }) datetime: IonDatetime;
  dateValue = '';
  dateValue2 = '';
  private codigo_mas;
  private codigo_gas;
  registrogasto = this.fb.group({
    gas_descripcion: ['', Validators.required],
    gas_monto: [''],
    gas_fecha: ['']
  });

  constructor(
    private fb: FormBuilder,
    private mascotagastoService: MascotagastoService,
    public router: Router,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.listarGasto();
  }
  formatDate(value: string) {
    return format(parseISO(value), 'yyyy-MM-dd');
  }
  listarGasto() {
    this.codigo_gas = this.activateRoute.snapshot.params.id;
    this.codigo_mas = this.activateRoute.snapshot.params.co;
    console.log("Esto es this.codigo del gasto", this.codigo_gas);
    console.log("Esto es this.codigo de la mascota", this.codigo_mas);
    if (this.codigo_gas !== '0') {
      this.mascotagastoService.getById(this.codigo_gas).subscribe((data) => {
        if (data.success) {
          console.log("DATOS",data);
          this.registrogasto.setValue({
            gas_descripcion: data.gasto.gas_descripcion,
            gas_monto: data.gasto.gas_monto,
            gas_fecha: data.gasto.gas_fecha,
          });
          console.log("Esto es despues de setear en registro gasto",this.registrogasto.value);
        }
      });
    }
  } 
  guardarGasto() {
    console.log("Esto es registro gasto ",this.registrogasto.value);
    const gastos = this.registrogasto.value;
    console.log("Esto es gastos",gastos);
    this.codigo_gas = this.activateRoute.snapshot.params.id;
    this.codigo_mas = this.activateRoute.snapshot.params.co;
    console.log("Esto es this.codigo del gasto", this.codigo_gas);
    console.log("Esto es this.codigo de la mascota", this.codigo_mas);
    const gasto = {
      gas_codigo: this.codigo_gas === '0' ? null : Number(this.codigo_gas),
      gas_descripcion: gastos.gas_descripcion,
      gas_monto: gastos.gas_monto,
      gas_fecha: gastos.gas_fecha,
      gas_mas_codigo: Number(this.codigo_mas),
    };
    console.log('Esto es Gasto', gasto);
      this.mascotagastoService.create(gasto).subscribe(async (data: any) => {
        console.log('DATA', gasto);
        this.router.navigate(['/listar-gastos/'+gasto['gas_mas_codigo']]);
      });
  }

}
