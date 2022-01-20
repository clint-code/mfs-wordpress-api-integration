import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesprovidedComponent } from './servicesprovided.component';

describe('ServicesprovidedComponent', () => {
  let component: ServicesprovidedComponent;
  let fixture: ComponentFixture<ServicesprovidedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesprovidedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesprovidedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
