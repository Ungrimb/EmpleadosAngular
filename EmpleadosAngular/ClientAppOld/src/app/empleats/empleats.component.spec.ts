import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleatsComponent } from './empleats.component';

describe('EmpleatsComponent', () => {
  let component: EmpleatsComponent;
  let fixture: ComponentFixture<EmpleatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
