import {Component, Input, OnInit} from '@angular/core';
import {Facility} from '../../../model/facility/facility';

@Component({
  selector: 'app-facility-edit',
  templateUrl: './facility-edit.component.html',
  styleUrls: ['./facility-edit.component.css']
})
export class FacilityEditComponent implements OnInit {
  @Input()
  facility: Facility;

  constructor() {
  }

  ngOnInit(): void {
  }
}
