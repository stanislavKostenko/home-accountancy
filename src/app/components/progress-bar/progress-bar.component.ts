import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ha-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent implements OnInit {
  @Input() value: number;
  @Input() limit: number;
  @Input() color: string;
  @Input() category: string;

  public maxWidth = 0;
  public animateBar = false;
  constructor() {}

  ngOnInit() {
    this.getPercentage();
    setTimeout(() => {
      this.animateBar = !this.animateBar;
    }, 500);
  }

  getPercentage() {
    this.maxWidth = this.value * 100 / this.limit;
  }
}
