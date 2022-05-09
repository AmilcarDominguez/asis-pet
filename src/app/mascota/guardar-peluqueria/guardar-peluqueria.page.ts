import { Component, OnInit } from '@angular/core';
import { format, parseISO } from 'date-fns';

@Component({
  selector: 'app-guardar-peluqueria',
  templateUrl: './guardar-peluqueria.page.html',
  styleUrls: ['./guardar-peluqueria.page.scss'],
})
export class GuardarPeluqueriaPage implements OnInit {
  dateValue = '';
  dateValue2 = '';
  constructor() { }

  ngOnInit() {
  }
  formatDate(value: string) {
    return format(parseISO(value), 'MMM dd yyyy');
  }

}
