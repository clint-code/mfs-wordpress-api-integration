import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionsbannerComponent } from './solutionsbanner.component';

describe('SolutionsbannerComponent', () => {
  let component: SolutionsbannerComponent;
  let fixture: ComponentFixture<SolutionsbannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolutionsbannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionsbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
