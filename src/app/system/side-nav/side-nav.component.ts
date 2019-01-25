import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Animations} from '@animations/animation';
import {environment} from '@env/environment';

@Component({
  selector: 'ha-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    Animations.enterLeave,
    Animations.openClose,
    Animations.fadeInOut,
    Animations.centerStart
  ]
})
export class SideNavComponent implements OnInit {
  public buttons: any[] = environment.sideNavButtons;
  public isOpened: boolean = false;
  public currentState: string = 'initial';
  public hide: string = 'start';

  constructor() {
  }

  ngOnInit() {
  }

  openSideNav() {
    this.isOpened = !this.isOpened;
    this.currentState = this.isOpened ? 'final' : 'initial';
    setTimeout(() => {
      this.hide = this.isOpened ? 'finish' : 'start';
    }, 150);
  }

}
