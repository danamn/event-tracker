import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

import { FormBuilder, Validators, FormGroup } from "@angular/forms";

import { DataModel } from "../../model/data-model";
import { Entry } from "../../model/entry";
import { EntryField } from "src/app/model/entry-field";

@Component({
  selector: "app-entry",
  templateUrl: "./entry.component.html",
  styleUrls: ["./entry.component.css"]
})
export class EntryComponent implements OnInit {
  @Input() entryData: Entry;
  @Input() entryModel: DataModel;
  @Output() handleSave = new EventEmitter<Object>();

  formData: FormGroup;
  entryFields: EntryField[] = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.getEntryFields();
    this.generateFormGroup();
  }

  getEntryFields() {
    if (this.entryModel) {
      this.entryModel.forEach(f => {
        const fieldValue = this.entryData && this.entryData[f.name];
        if (f.name !== "type") {
          this.entryFields.push({
            fieldName: f.name,
            fieldType: f.type,
            value: fieldValue
          });
        }
      });
    }
  }

  generateFormGroup() {
    const formFields = {};
    this.entryFields.forEach(field => {
      formFields[field.fieldName] = [field.value || "", [Validators.required]];
    });

    this.formData = this.fb.group(formFields);
  }

  onSave() {
    const entry: Entry = {
      ...this.formData.value
    };
    this.handleSave.emit({ entry });
  }
}
