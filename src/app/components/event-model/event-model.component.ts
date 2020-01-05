import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Store, select } from "@ngrx/store";
import { take } from "rxjs/operators";

import { EventModel } from "./event-model";
import { AppState } from "../../store/state/app.state";
import * as AppAction from "../../store/actions";
import { selectEventModel } from "../../store/selectors";
// import { Model } from "../../model.enum";

@Component({
  selector: "app-event-model",
  templateUrl: "./event-model.component.html",
  styleUrls: ["./event-model.component.css"]
})
export class EventModelComponent implements OnInit {
  // model = Model.event;
  eventModel$ = this.store.pipe(select(selectEventModel));

  constructor(private route: ActivatedRoute, private store: Store<any>) {}

  ngOnInit() {}

  getEventModel() {
    let evM: EventModel;
    this.store.pipe(select(selectEventModel), take(1)).subscribe(eventModel => {
      evM = eventModel;
    });
    return evM;
  }

  onSave() {
    // alert(JSON.stringify(this.eventFieldForm.value));
    // const newField: Field = this.eventFieldForm.value;
    // this.eventModel.addField(newField);
    // console.log("EV", this.eventModel);
    // this.store.dispatch(EventModelAction.addField(newField));
  }

  onFieldDataChange({ fieldData, initialFieldName }) {
    const fields = [...this.getEventModel()];

    if (initialFieldName) {
      const changedFieldIndex = fields.findIndex(
        f => f.name === initialFieldName
      );
      fields[changedFieldIndex] = fieldData;
    } else {
      fields.push(fieldData);
    }

    this.store.dispatch(AppAction.setEventModel({ eventModel: fields }));
  }
}
