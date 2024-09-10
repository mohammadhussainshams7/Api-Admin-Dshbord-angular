import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainpageadminComponent } from './mainpageadmin.component';

describe('MainpageadminComponent', () => {
  let component: MainpageadminComponent;
  let fixture: ComponentFixture<MainpageadminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainpageadminComponent]
    });
    fixture = TestBed.createComponent(MainpageadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
