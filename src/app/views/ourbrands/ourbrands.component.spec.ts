import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurbrandsComponent } from './ourbrands.component';

describe('OurbrandsComponent', () => {
  let component: OurbrandsComponent;
  let fixture: ComponentFixture<OurbrandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurbrandsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurbrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
