import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowoneportfolioComponent } from './showoneportfolio.component';

describe('ShowoneportfolioComponent', () => {
  let component: ShowoneportfolioComponent;
  let fixture: ComponentFixture<ShowoneportfolioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowoneportfolioComponent]
    });
    fixture = TestBed.createComponent(ShowoneportfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
