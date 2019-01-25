import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

import {BillInterface} from '@interfaces/bill.interface';
import {CurrencyInterface} from '@interfaces/currency.interface';

@Component({
  selector: 'ha-bill-card',
  templateUrl: './bill-card.component.html',
  styleUrls: ['./bill-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BillCardComponent implements OnInit {
  @Input() billTable: BillInterface;
  @Input() currencyTable: CurrencyInterface[];
  @Input() icons: any;
  currencyUSD: string;
  currencyEUR: string;
  constructor() {
  }

  ngOnInit() {
    this.currencyUSD = this.findCurrency('USD').buy;
    this.currencyEUR = this.findCurrency('EUR').buy;
  }

  convertTo(currency: string): number {
    return this.billTable.value / parseInt(currency, 10);
  }

  findCurrency(currency: string): CurrencyInterface {
    return Object.assign({}, ...this.currencyTable
      .filter((item: CurrencyInterface) => item.buy && item.ccy === currency));
  }

}
