import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'ha-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  animations: [
    trigger('EnterLeave', [
      transition(':enter', [
        style({opacity: 0}),
        animate(500)
      ]),
      transition(':leave', [
        animate(500, style({opacity: 1}))
      ])
    ]),
    trigger('authAnimation', [
      transition('start => *', [
        style({height: 'fit-content'}),
        animate('500ms ease-out')
      ]),
      transition('* => void', [
        animate('500ms ease-in', style({height: 'fit-content'}))
      ])
    ])
  ]
})
export class AuthComponent implements OnInit {
  constructor(private router: Router) {
  }

  ngOnInit() {
    this.router.navigate(['/login']);
  }

}
