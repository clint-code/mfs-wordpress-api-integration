import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglesolutionComponent } from './singlesolution.component';

describe('SinglesolutionComponent', () => {
  let component: SinglesolutionComponent;
  let fixture: ComponentFixture<SinglesolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglesolutionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglesolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
