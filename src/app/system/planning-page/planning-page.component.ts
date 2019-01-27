import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Animations}                           from '@animations/animation';

@Component({
  selector: 'ha-planning-page',
  templateUrl: './planning-page.component.html',
  styleUrls: ['./planning-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [ Animations.enterLeaveOpacity ]
})
export class PlanningPageComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }

}
