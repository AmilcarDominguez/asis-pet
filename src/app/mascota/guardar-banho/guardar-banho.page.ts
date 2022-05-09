import { Component, OnInit } from '@angular/core';
import { format, parseISO } from 'date-fns';

@Component({
  selector: 'app-guardar-banho',
  templateUrl: './guardar-banho.page.html',
  styleUrls: ['./guardar-banho.page.scss'],
})
export class GuardarBanhoPage implements OnInit {
  dateValue = '';
  dateValue2 = '';
  constructor() { }

  ngOnInit() {
  }
  formatDate(value: string) {
    return format(parseISO(value), 'MMM dd yyyy');
  }
}
