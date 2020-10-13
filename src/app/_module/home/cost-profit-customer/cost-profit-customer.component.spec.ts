import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostProfitCustomerComponent } from './cost-profit-customer.component';

describe('CostProfitCustomerComponent', () => {
  let component: CostProfitCustomerComponent;
  let fixture: ComponentFixture<CostProfitCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostProfitCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostProfitCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
