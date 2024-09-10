import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNavbarComponent } from './modal-navbar.component';

describe('ModalNavbarComponent', () => {
  let component: ModalNavbarComponent;
  let fixture: ComponentFixture<ModalNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalNavbarComponent]
    });
    fixture = TestBed.createComponent(ModalNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
