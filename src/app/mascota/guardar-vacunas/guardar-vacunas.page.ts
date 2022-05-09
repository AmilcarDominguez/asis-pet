import { Component, OnInit } from '@angular/core';
import { format, parseISO } from 'date-fns';

@Component({
  selector: 'app-guardar-vacunas',
  templateUrl: './guardar-vacunas.page.html',
  styleUrls: ['./guardar-vacunas.page.scss'],
})
export class GuardarVacunasPage implements OnInit {
  dateValue = '';
  dateValue2 = '';
  constructor() { }

  ngOnInit() {
  }
  formatDate(value: string) {
    return format(parseISO(value), 'MMM dd yyyy');
  }
}
