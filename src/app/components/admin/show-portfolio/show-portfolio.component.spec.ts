import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPortfolioComponent } from './show-portfolio.component';

describe('ShowPortfolioComponent', () => {
  let component: ShowPortfolioComponent;
  let fixture: ComponentFixture<ShowPortfolioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowPortfolioComponent]
    });
    fixture = TestBed.createComponent(ShowPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
