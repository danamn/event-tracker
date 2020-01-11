import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { take } from "rxjs/operators";
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from "@angular/common";

import { Entry } from "../../model/entry";
import {
  selectEventModel,
  selectEvents,
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

  eventData: Entry;
  eventId: string;

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
    if (this.eventId) {
      this.store.dispatch(
        AppAction.editEvent({
          trEvent,
          eventId: this.eventId
        })
      );
    } else {
      this.store.dispatch(AppAction.addEvent({ trEvent }));
    }
    this.location.back();

    // this.router.navigate(['/']);
  }
}
