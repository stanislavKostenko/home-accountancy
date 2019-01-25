import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import {environment} from '@env/environment';
import {HistoryInterface} from '@interfaces/history.interface';

const single = environment.single;
const multi = environment.multi;

@Component({
  selector: 'ha-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('EnterLeave', [
      transition(':enter', [
        style({opacity: 0}),
        animate(500)
      ]),
      transition(':leave', [
        animate(500, style({opacity: 1}))
      ])
    ])
  ]
})
export class HistoryPageComponent implements OnInit {
  public displayedColumns: string[] = ['position', 'equal', 'date', 'category', 'type', 'action'];
  public historyTable: HistoryInterface[] = environment.historyTable;
  public single: any[];
  public view: number[] = [700, 400];
  public colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() {
    Object.assign(this, {single, multi});
  }

  ngOnInit() {
  }

  onSelect(event) {
    console.log(event);
  }

}
