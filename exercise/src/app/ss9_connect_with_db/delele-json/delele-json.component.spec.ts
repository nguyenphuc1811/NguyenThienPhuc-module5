import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleleJsonComponent } from './delele-json.component';

describe('DeleleJsonComponent', () => {
  let component: DeleleJsonComponent;
  let fixture: ComponentFixture<DeleleJsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleleJsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleleJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
