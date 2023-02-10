import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListJsonComponent } from './list-json.component';

describe('ListJsonComponent', () => {
  let component: ListJsonComponent;
  let fixture: ComponentFixture<ListJsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListJsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
