import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventModelFieldFormComponent } from './event-model-field-form.component';

describe('EventModelFieldFormComponent', () => {
  let component: EventModelFieldFormComponent;
  let fixture: ComponentFixture<EventModelFieldFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventModelFieldFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventModelFieldFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
