import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { take } from "rxjs/operators";
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from "@angular/common";
import { FormGroup, FormControl } from "@angular/forms";

import { Entry } from "../../model/entry";
import {
  selectEventModel,
  selectEvents,
  selectTypes,
  AppState
} from "../../store/selectors";
import * as AppAction from "../../store/actions";

@Component({
  selector: "app-event",
  templateUrl: "./event.component.html",
  styleUrls: ["./event.component.css"]
})
export class EventComponent implements OnInit {
  eventModel$ = this.store.pipe(select(selectEventModel));
  types$ = this.store.pipe(select(selectTypes));

  eventData: Entry;
  eventId: string;

  eventTypeSelector = new FormGroup({
    type: new FormControl("")
  });

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
    // private router: Router,
    private location: Location
  ) {}

  ngOnInit() {
    const urlId = this.route.snapshot.paramMap.get("id");
    if (urlId) {
      this.eventId = urlId;
      this.eventData = this.getEventData(urlId);
      this.eventTypeSelector.get("type").setValue(this.eventData.typeId);
    } else {
      this.eventTypeSelector.get("type").setValue("default");
    }
    // this.getEventFields();
    // this.generateFormFields();
  }

  getEventData(id: string): Entry {
    let events: Entry[];
    this.store.pipe(select(selectEvents), take(1)).subscribe(e => {
      events = e;
    });

    const currentEvent = events.find(ev => ev.id === id);
    return currentEvent;
  }

  handleSave(trEvent) {
    const eventWithType = {
      ...trEvent,
      typeId: this.eventTypeSelector.value.type
    };
    if (this.eventId) {
      this.store.dispatch(
        AppAction.editEvent({
          trEvent: eventWithType,
          eventId: this.eventId
        })
      );
    } else {
      this.store.dispatch(AppAction.addEvent({ trEvent: eventWithType }));
    }
    this.location.back();

    // this.router.navigate(['/']);
  }
}
