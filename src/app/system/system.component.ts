import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserInterface} from '@interfaces/user.interface';

@Component({
  selector: 'ha-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.scss']
})
export class SystemComponent implements OnInit, OnDestroy {
  currentTime: Date;
  timer: number;
  user: UserInterface;

  constructor() {
    this.timer = setInterval(() => {
      this.getCurrentTime();
    }, 1000);
  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.user = this.user[0];
  }

  getCurrentTime() {
    this.currentTime = new Date();
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }

}
