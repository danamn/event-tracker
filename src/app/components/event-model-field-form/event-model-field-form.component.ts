import { Component, OnInit, EventEmitter, Input, Output } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

import { Field } from "../event-model/event-model";

@Component({
  selector: "app-event-model-field-form",
  templateUrl: "./event-model-field-form.component.html",
  styleUrls: ["./event-model-field-form.component.css"]
})
export class EventModelFieldFormComponent implements OnInit {
  FieldTypes: Object[] = [
    { value: "date", label: "Date" },
    { value: "inputField", label: "Input Field" }
  ];

  @Input() fieldData: Field;
  @Output() changeFieldData = new EventEmitter<object>();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    if (this.fieldData) {
      this.type.setValue(this.fieldData.type);
      this.name.setValue(this.fieldData.name);
    }
  }

  eventFieldForm = this.fb.group({
    name: ["", [Validators.required]],
    type: ["", [Validators.required]]
  });

  changeType(e) {
    this.type.setValue(e.target.value, {
      onlySelf: true
    });
  }

  onSubmit() {
    this.changeFieldData.emit({
      fieldData: this.eventFieldForm.value,
      initialFieldName: this.fieldData && this.fieldData.name
    });
  }

  get type() {
    return this.eventFieldForm.get("type");
  }
  get name() {
    return this.eventFieldForm.get("name");
  }
}
