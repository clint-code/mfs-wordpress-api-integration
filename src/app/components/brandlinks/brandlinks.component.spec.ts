import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandlinksComponent } from './brandlinks.component';

describe('BrandlinksComponent', () => {
  let component: BrandlinksComponent;
  let fixture: ComponentFixture<BrandlinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandlinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandlinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
