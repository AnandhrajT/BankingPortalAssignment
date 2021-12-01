import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingTemplateComponent } from './banking-template.component';

describe('BankingTemplateComponent', () => {
  let component: BankingTemplateComponent;
  let fixture: ComponentFixture<BankingTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankingTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankingTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
