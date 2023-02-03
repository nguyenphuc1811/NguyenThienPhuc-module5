import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPikerAppComponent } from './color-piker-app.component';

describe('ColorPikerAppComponent', () => {
  let component: ColorPikerAppComponent;
  let fixture: ComponentFixture<ColorPikerAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorPikerAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorPikerAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
