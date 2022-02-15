import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryDropDownComponent } from './country-drop-down.component';

describe('CountryDropDownComponent', () => {
  let component: CountryDropDownComponent;
  let fixture: ComponentFixture<CountryDropDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryDropDownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
