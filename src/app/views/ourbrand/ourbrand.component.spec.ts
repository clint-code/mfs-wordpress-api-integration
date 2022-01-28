import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurbrandComponent } from './ourbrand.component';

describe('OurbrandComponent', () => {
  let component: OurbrandComponent;
  let fixture: ComponentFixture<OurbrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurbrandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurbrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
