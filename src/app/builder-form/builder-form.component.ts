import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-builder-form',
  templateUrl: './builder-form.component.html',
  styleUrls: ['./builder-form.component.css']
})
export class BuilderFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  log(x) {
    console.log(x);
  }

}
