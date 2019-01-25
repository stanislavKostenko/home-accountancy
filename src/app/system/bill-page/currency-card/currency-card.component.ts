import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {CurrencyInterface} from '@interfaces/currency.interface';

@Component({
  selector: 'ha-currency-card',
  templateUrl: './currency-card.component.html',
  styleUrls: ['./currency-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CurrencyCardComponent implements OnInit {
  @Input() currencyTable: CurrencyInterface[];
  @Input() date: string;
  @Input() displayedColumns: string[];

  constructor() {
  }

  ngOnInit() {
  }

  convertTo(value: string): number {
    return Number(value);
  }

}
