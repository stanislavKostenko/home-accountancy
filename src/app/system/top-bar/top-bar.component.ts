import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Router}                                      from '@angular/router';
import {faPowerOff, faUserCog}                       from '@fortawesome/free-solid-svg-icons';
import {UserInterface}                               from '@interfaces/user.interface';
import {AuthService}                                 from '@services/auth.service';
import {Animations}                                  from '@animations/animation';

@Component({
  selector: 'ha-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    Animations.enterLeaveTop
  ]
})
export class TopBarComponent implements OnInit {
  @Input() currentTime: string;
  @Input() user: UserInterface;
  icons: any = {
    userCogs: faUserCog,
    powerOff: faPowerOff
  };

  constructor(
    private router: Router,
    private authService: AuthService) {
  }

  ngOnInit() {
  }

  handleLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
