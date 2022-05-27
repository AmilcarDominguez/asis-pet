import { Component, OnInit } from '@angular/core';
import { format, parseISO } from 'date-fns';

@Component({
  selector: 'app-guardar-gastos',
  templateUrl: './guardar-gastos.page.html',
  styleUrls: ['./guardar-gastos.page.scss'],
})
export class GuardarGastosPage implements OnInit {
  dateValue = '';
  dateValue2 = '';
  constructor() { }

  ngOnInit() {
  }
  formatDate(value: string) {
    return format(parseISO(value), 'MMM dd yyyy');
  }

}