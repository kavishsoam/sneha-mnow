import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvgTimeAppointmentComponent } from './avg-time-appointment.component';

describe('AvgTimeAppointmentComponent', () => {
  let component: AvgTimeAppointmentComponent;
  let fixture: ComponentFixture<AvgTimeAppointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvgTimeAppointmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvgTimeAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
