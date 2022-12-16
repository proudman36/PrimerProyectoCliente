import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmmerreComponent } from './emmerre.component';

describe('EmmerreComponent', () => {
  let component: EmmerreComponent;
  let fixture: ComponentFixture<EmmerreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmmerreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmmerreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
