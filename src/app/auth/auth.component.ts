import {Component, OnInit} from '@angular/core';
import {Router}            from '@angular/router';
import {Animations}        from '@animations/animation';

@Component({
  selector: 'ha-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  animations: [ Animations.enterLeaveOpacity ]
})
export class AuthComponent implements OnInit {
  constructor(private router: Router) {
  }

  ngOnInit() {
    this.router.navigate(['/login']);
  }

}
