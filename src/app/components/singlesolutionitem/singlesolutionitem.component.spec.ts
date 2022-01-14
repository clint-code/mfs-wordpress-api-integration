import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglesolutionitemComponent } from './singlesolutionitem.component';

describe('SinglesolutionitemComponent', () => {
  let component: SinglesolutionitemComponent;
  let fixture: ComponentFixture<SinglesolutionitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglesolutionitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglesolutionitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
