import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import {CategoryInterface} from '@interfaces/category.interface';
import {environment} from '@env/environment';

@Component({
  selector: 'ha-records-page',
  templateUrl: './records-page.component.html',
  styleUrls: ['./records-page.component.scss'],
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
export class RecordsPageComponent implements OnInit {
  public icons: any = environment.icons;
  public isEditable: boolean = false;
  constructor() {
  }

  ngOnInit() {
  }

  newCategoryAdded(category: CategoryInterface) {
    // new array
  }

}
