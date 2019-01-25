import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'ha-planning-page',
  templateUrl: './planning-page.component.html',
  styleUrls: ['./planning-page.component.scss'],
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
export class PlanningPageComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }

}
