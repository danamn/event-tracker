import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { CALENDARS } from "../calendars/mock-calendars";
import { Calendar } from "../calendar/calendar";
import { EventModel, Field } from "./event-model";

@Component({
  selector: "app-event-model",
  templateUrl: "./event-model.component.html",
  styleUrls: ["./event-model.component.css"]
})
export class EventModelComponent implements OnInit {
  FieldTypes: String[] = ["Date", "Input field"];
  eventModel: EventModel;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // this.getEventModel();

    this.eventModel = new EventModel();
    this.eventModel.fields = [{ name: "test", type: "date" }];
  }

  getEventModel(): void {
    const name = this.route.snapshot.paramMap.get("name");

    const calendar: Calendar = CALENDARS.find(
      (cal: Calendar) => cal.name === name
    );

    this.eventModel = calendar.eventModel;
  }

  onSave() {
    // alert(JSON.stringify(this.eventFieldForm.value));
    // const newField: Field = this.eventFieldForm.value;
    // this.eventModel.addField(newField);
    // console.log("EV", this.eventModel);
  }

  onFieldDataChange({ fieldData, initialFieldName }) {
    const { fields } = this.eventModel;
    if (initialFieldName) {
      const changedFieldIndex = fields.findIndex(
        f => f.name === initialFieldName
      );
      fields[changedFieldIndex] = fieldData;
    } else {
      fields.push(fieldData);
    }
    console.log(this.eventModel);
  }
}
