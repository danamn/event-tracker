import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

import { FormBuilder, Validators, FormGroup } from "@angular/forms";

import { DataModel } from "../../model/data-model";
import { Entry } from "../../model/entry";

import { GenerateIdService } from "src/app/services/generate-id.service";
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

  constructor(private generateId: GenerateIdService, private fb: FormBuilder) {}

  ngOnInit() {
    this.getEntryFields();
    this.generateFormGroup();
  }

  getEntryFields() {
    this.entryModel.forEach(f => {
      const fieldValue = this.entryData && this.entryData[f.name];
      this.entryFields.push({
        fieldName: f.name,
        fieldType: f.type,
        value: fieldValue
      });
    });
  }

  generateFormGroup() {
    const formFields = {};
    this.entryFields.forEach(field => {
      formFields[field.fieldName] = [field.value || "", [Validators.required]];
    });

    this.formData = this.fb.group(formFields);
    console.log(this.formData);
  }

  onSave() {
    const id = (this.entryData && this.entryData.id) || this.generateId.getId();
    const entry: Entry = {
      ...this.formData.value
    };
    this.handleSave.emit({ entry, id });
  }
}
