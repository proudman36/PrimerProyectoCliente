import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselBrandsComponent } from './carousel-brands.component';

describe('CarouselBrandsComponent', () => {
  let component: CarouselBrandsComponent;
  let fixture: ComponentFixture<CarouselBrandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselBrandsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
