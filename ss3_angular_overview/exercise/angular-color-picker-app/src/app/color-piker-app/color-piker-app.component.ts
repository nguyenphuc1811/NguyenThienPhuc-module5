import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-color-piker-app',
  templateUrl: './color-piker-app.component.html',
  styleUrls: ['./color-piker-app.component.css']
})
export class ColorPikerAppComponent implements OnInit {
  color: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  changeColor(target: any) {
    this.color = target.value;
  }
}
