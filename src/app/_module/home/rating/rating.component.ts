import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  public dataArr = [{
    "alpha": "J",
    "name": "Joshua Ramierez"
  }, {
    "alpha": "H",
    "name": "Hanna Aquio"
  }, {
    "alpha": "A",
    "name": "Angelica Sancez"
  }];


  constructor() { }

  ngOnInit() {
  }


}
