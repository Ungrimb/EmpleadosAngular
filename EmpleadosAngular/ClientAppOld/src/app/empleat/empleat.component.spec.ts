import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleatComponent } from './empleat.component';

describe('EmpleatComponent', () => {
  let component: EmpleatComponent;
  let fixture: ComponentFixture<EmpleatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
