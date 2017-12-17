import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRentComponent } from './new-rent.component';

describe('NewRentComponent', () => {
  let component: NewRentComponent;
  let fixture: ComponentFixture<NewRentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
