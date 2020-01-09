import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { take } from "rxjs/operators";
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from "@angular/common";

import { FormBuilder, Validators, FormGroup } from "@angular/forms";

import { DataModel } from "../../model/data-model";
import { TrEvent } from "../../model/tr-event";
import { selectEventModel, selectEvents } from "../../store/selectors";
import * as AppAction from "../../store/actions";

import { GenerateIdService } from "src/app/services/generate-id.service";
import { ModelFieldFormComponent } from "../model-field-form/model-field-form.component";

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
  // eventModel$ = this.store.pipe(select(selectEventModel));
  // events$ = this.store.pipe(select(selectEvents));
  eventFields: eventField[] = [];
  eventData: TrEvent;
  formData: FormGroup;
  eventId: string;

  constructor(
    private store: Store<any>,
    private route: ActivatedRoute,
    // private router: Router,
    private location: Location,
    private generateId: GenerateIdService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    const urlId = this.route.snapshot.paramMap.get("id");
    if (urlId) {
      this.eventId = urlId;
      this.eventData = this.getEventData(urlId);
    }
    this.getEventFields();
    this.generateFormFields();
  }

  getEventData(id: string): TrEvent {
    let events: TrEvent[];
    this.store.pipe(select(selectEvents), take(1)).subscribe(e => {
      events = e;
    });

    const currentEvent = events.find(ev => ev.id === id);
    return currentEvent;
  }

  getEventFields() {
    const eventModelFields = this.getEventModel();

    eventModelFields.forEach(f => {
      const fieldValue = this.eventData && this.eventData[f.name];
      this.eventFields.push({ name: f.name, type: f.type, value: fieldValue });
    });
  }

  generateFormFields() {
    const formFields = {};
    this.eventFields.forEach(field => {
      formFields[field.name] = [field.value || "", [Validators.required]];
    });

    this.formData = this.fb.group(formFields);
    console.log(this.formData);
  }

  getEventModel() {
    let evM: DataModel;
    this.store.pipe(select(selectEventModel), take(1)).subscribe(eventModel => {
      evM = eventModel;
    });
    return evM;
  }

  onSave() {
    const trEvent = {
      ...this.formData.value,
      id: this.eventId || this.generateId.getId(),
      typeId: "123"
    };

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
