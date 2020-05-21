import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.sass']
})
export class LogInComponent implements OnInit {
  height: number;
  width: number;
  constructor() {
    this.height = window.innerHeight;
    this.width = window.innerWidth;
  }

  ngOnInit() {
  }

}
