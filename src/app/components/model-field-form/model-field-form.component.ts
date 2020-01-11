import {
  Component,
  OnInit,
  EventEmitter,
  Input,
  Output,
  Inject
} from "@angular/core";
import { FormBuilder, Validators, FormControl } from "@angular/forms";
import { DDOption, DDOPTIONS } from "../../configs/dropdown.config";

import { ModelField } from "../../model/model-field";
// import { Model } from "../../model.enum";

@Component({
  selector: "app-model-field-form",
  templateUrl: "./model-field-form.component.html",
  styleUrls: ["./model-field-form.component.css"]
})
export class ModelFieldFormComponent implements OnInit {
  fieldTypes: DDOption[];

  @Input() fieldData: ModelField;
  @Output() changeFieldData = new EventEmitter<object>();
  @Input() error: string;

  constructor(
    private fb: FormBuilder,
    @Inject(DDOPTIONS) dropdownOptions: DDOption[]
  ) {
    this.fieldTypes = dropdownOptions;
  }

  ngOnInit() {
    if (this.fieldData) {
      this.name.setValue(this.fieldData.name);
      if (this.fieldData.name === "type") {
        this.name.disable();
        this.type.disable();
      } else {
        this.name.setValue(this.fieldData.name);
        this.type.setValue(this.fieldData.type);
      }
      // this.error = this.fieldData.error;
    }
  }

  eventFieldForm = this.fb.group({
    name: ["", [Validators.required]],
    type: ["", [Validators.required]]
  });

  // changeType(e) {
  //   this.type.setValue(e.target.value, {
  //     onlySelf: true
  //   });
  // }

  onSubmit() {
    this.changeFieldData.emit({
      fieldData: this.eventFieldForm.value,
      initialFieldName: this.fieldData && this.fieldData.name
    });
    if (!this.fieldData) {
      this.name.setValue("");
      this.type.setValue("");
    }
  }

  get type() {
    return this.eventFieldForm.get("type");
  }
  get name() {
    return this.eventFieldForm.get("name");
  }
}
