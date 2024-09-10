import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowoneblogComponent } from './showoneblog.component';

describe('ShowoneblogComponent', () => {
  let component: ShowoneblogComponent;
  let fixture: ComponentFixture<ShowoneblogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowoneblogComponent]
    });
    fixture = TestBed.createComponent(ShowoneblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
