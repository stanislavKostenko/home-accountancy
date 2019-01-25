import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {combineLatest, Subject, Subscription} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

import {BillInterface} from '@interfaces/bill.interface';
import {environment} from '@env/environment';
import {CurrencyInterface} from '@interfaces/currency.interface';
import {ApiService} from '@services/api.service';
import {Animations} from '@animations/animation';

@Component({
  selector: 'ha-bill-page',
  templateUrl: './bill-page.component.html',
  styleUrls: ['./bill-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    Animations.enterLeaveOpacity,
    Animations.rotateSingleIcon
  ]
})
export class BillPageComponent implements OnInit, OnDestroy {
  public billTable: BillInterface;
  public currencyTable: CurrencyInterface[];
  public date: Date = new Date();
  public displayedColumns: string[] = ['Position', 'Currency', 'Value', 'Date'];
  public spinnerColor: string = 'primary';
  public spinnerMode: string = 'indeterminate';
  public spinnerValue: number = 80;
  public subscription: Subscription[] = [];
  public isLoaded: boolean = false;
  public icons = environment.icons;
  public animationState: string = 'initial';
  private ngUnsubscribe: Subject<boolean> = new Subject<boolean>();

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.getBillPageData();
  }

  getBillPageData() {
    this.subscription.push(
      combineLatest(
        this.apiService.getBill(),
        this.apiService.getCurrencyConversion()
      ).pipe(takeUntil(this.ngUnsubscribe))
        .subscribe((data: [BillInterface, CurrencyInterface[]]) => {
          this.billTable = data[0];
          this.currencyTable = this.filterCurrencyTable(data[1]);
          this.isLoaded = true;
        })
    );
  }

  handleRefresh() {
    this.animationState = this.animationState === 'initial' ? 'final' : 'initial';
    this.isLoaded = false;
    this.apiService.getCurrencyConversion()
      .subscribe((data: CurrencyInterface[]) => {
      this.currencyTable = this.filterCurrencyTable(data);
      this.isLoaded = true;
    });
  }

  filterCurrencyTable(data: CurrencyInterface[]): CurrencyInterface[] {
    return data.filter((item: CurrencyInterface) => item.ccy !== 'BTC');
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next(true);
    this.ngUnsubscribe.complete();
    this.subscription.map((item: Subscription) => item.unsubscribe());
  }

}
