import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { take } from "rxjs/operators";

import { EventModel } from "../../model/event-model";
import { TrEvent } from "../../model/tr-event";
import { selectEventModel } from "../../store/selectors";

interface eventField {
  name: string;
  type: any;
  value: string | Date | number;
}

@Component({
  selector: "app-event",
  templateUrl: "./event.component.html",
  styleUrls: ["./event.component.css"]
})
export class EventComponent implements OnInit {
  eventModel$ = this.store.pipe(select(selectEventModel));
  eventFields: eventField[];

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.eventFields = [];
    this.getEventFields();
  }

  getEventFields() {
    const eventModelFields = this.getEventModel();
    console.log(eventModelFields, this.eventFields);

    eventModelFields.forEach(f => {
      this.eventFields.push({ name: f.name, type: f.type, value: null });
    });
  }

  getEventModel() {
    let evM: EventModel;
    this.store.pipe(select(selectEventModel), take(1)).subscribe(eventModel => {
      evM = eventModel;
    });
    return evM;
  }
}
