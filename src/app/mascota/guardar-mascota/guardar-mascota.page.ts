import { Component, OnInit, ViewChild } from '@angular/core';
import { IonDatetime } from '@ionic/angular';
import { format, parseISO } from 'date-fns';


@Component({
  selector: 'app-guardar-mascota',
  templateUrl: './guardar-mascota.page.html',
  styleUrls: ['./guardar-mascota.page.scss'],
})
export class GuardarMascotaPage implements OnInit {

  @ViewChild(IonDatetime, { static: true }) datetime: IonDatetime;

  dateValue = '';
  dateValue2 = '';

  constructor() {

  }

  ngOnInit(): void {
    
  }
  
  formatDate(value: string) {
    return format(parseISO(value), 'MMM dd yyyy');
  }
}
