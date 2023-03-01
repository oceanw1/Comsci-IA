import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateDataComponent } from './date-data.component';

describe('DateDataComponent', () => {
  let component: DateDataComponent;
  let fixture: ComponentFixture<DateDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DateDataComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
