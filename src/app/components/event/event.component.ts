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
  selectTypeTitleField,
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
  typeTitleField$ = this.store.pipe(select(selectTypeTitleField));

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
  }

  getEventData(id: string): Entry {
    let events: Record<string, Entry>;
    this.store.pipe(select(selectEvents), take(1)).subscribe(e => {
      events = e;
    });

    const currentEvent = events[id];
    return currentEvent;
  }

  handleSave({ entry: trEvent }) {
    const eventWithType = {
      ...trEvent,
      typeId: this.eventTypeSelector.value.type
    };
    this.store.dispatch(
      AppAction.saveEvent({
        trEvent: eventWithType,
        eventId: this.eventId
      })
    );

    this.location.back();

    // this.router.navigate(['/']);
  }
}
