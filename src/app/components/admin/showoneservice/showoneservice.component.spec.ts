import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowoneserviceComponent } from './showoneservice.component';

describe('ShowoneserviceComponent', () => {
  let component: ShowoneserviceComponent;
  let fixture: ComponentFixture<ShowoneserviceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowoneserviceComponent]
    });
    fixture = TestBed.createComponent(ShowoneserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
