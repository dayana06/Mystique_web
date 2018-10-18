import { Component, OnInit } from '@angular/core';
declare var require: any
@Component({
  selector: 'app-clientreview',
  templateUrl: './clientreview.component.html',
  styleUrls: ['./clientreview.component.css']
})
export class ClientreviewComponent implements OnInit {
  
  private TESTIMONIAL = require("./assets/testimonial.jpg");

  constructor() { }

  ngOnInit() {
  }

}
