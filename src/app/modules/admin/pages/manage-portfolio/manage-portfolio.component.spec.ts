import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePortfolioComponent } from './manage-portfolio.component';

describe('ManagePortfolioComponent', () => {
  let component: ManagePortfolioComponent;
  let fixture: ComponentFixture<ManagePortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagePortfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
