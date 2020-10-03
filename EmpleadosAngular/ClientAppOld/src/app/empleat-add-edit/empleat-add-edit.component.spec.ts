import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleatAddEditComponent } from './empleat-add-edit.component';

describe('EmpleatAddEditComponent', () => {
  let component: EmpleatAddEditComponent;
  let fixture: ComponentFixture<EmpleatAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleatAddEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleatAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
