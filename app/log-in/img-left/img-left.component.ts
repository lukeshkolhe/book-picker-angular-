import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-left',
  templateUrl: './img-left.component.html',
  styleUrls: ['./img-left.component.sass']
})
export class ImgLeftComponent implements OnInit {
  height;
  width;
  constructor() { }

  ngOnInit() {
    this.height = window.innerHeight;
    this.width = window.innerWidth;
  }

}
