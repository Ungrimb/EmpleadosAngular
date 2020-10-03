import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleatsAddEditComponent } from './empleats-add-edit.component';

describe('EmpleatsAddEditComponent', () => {
  let component: EmpleatsAddEditComponent;
  let fixture: ComponentFixture<EmpleatsAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleatsAddEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleatsAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
