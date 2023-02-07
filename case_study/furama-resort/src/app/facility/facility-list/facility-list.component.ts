import {Component, Input, OnInit} from '@angular/core';
import {Facility} from '../../model/facility/facility';
import {RentType} from '../../model/facility/rent-type';
import {FacilityType} from '../../model/facility/facility-type';

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {
  facility: Facility;
  rentTypeList: RentType[] = [
    {
      id: 1,
      name: 'ngày'
    },
    {
      id: 2,
      name: 'tháng'
    },
    {
      id: 3,
      name: 'năm'
    },
    {
      id: 4,
      name: 'giờ'
    },
  ];
  facilityTypeList: FacilityType[] = [
    {
      id: 1,
      name: 'Villa'
    },
    {
      id: 2,
      name: 'House'
    },
    {
      id: 3,
      name: 'Room'
    }
  ];

  facilityList: Facility[] = [
    {
      id: 1,
      name: 'Villa Beach Front',
      area: 25000,
      cost: 1000000,
      maxPeople: 10,
      rentType: {id: 1, name: 'ngày'},
      facilityType: {id: 1, name: 'Villa'},
      standardRoom: 'vip',
      description: 'Có hồ bơi',
      poolArea: 500,
      floor: 4,
      facilityFree: null
    },
    {
      id: 2,
      name: 'House Princess 01',
      area: 14000,
      cost: 5000000,
      maxPeople: 7,
      rentType: {id: 1, name: 'giờ'},
      facilityType: {id: 1, name: 'House'},
      standardRoom: 'house',
      description: 'Có thêm bếp nướng',
      poolArea: 5,
      floor: 3,
      facilityFree: 'FHO'
    }

  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  edit(item: Facility) {
    this.facility = item;
  }
}
