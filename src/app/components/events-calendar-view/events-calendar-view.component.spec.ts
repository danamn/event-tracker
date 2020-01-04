import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsCalendarViewComponent } from './events-calendar-view.component';

describe('EventsCalendarViewComponent', () => {
  let component: EventsCalendarViewComponent;
  let fixture: ComponentFixture<EventsCalendarViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsCalendarViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsCalendarViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
