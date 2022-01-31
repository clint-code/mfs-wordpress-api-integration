import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatepreloaderComponent } from './animatepreloader.component';

describe('AnimatepreloaderComponent', () => {
  let component: AnimatepreloaderComponent;
  let fixture: ComponentFixture<AnimatepreloaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimatepreloaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatepreloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
