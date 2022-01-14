import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglesolutionsintroComponent } from './singlesolutionsintro.component';

describe('SinglesolutionsintroComponent', () => {
  let component: SinglesolutionsintroComponent;
  let fixture: ComponentFixture<SinglesolutionsintroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglesolutionsintroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglesolutionsintroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
