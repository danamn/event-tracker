import {
  Component,
  OnInit,
  EventEmitter,
  Input,
  Output,
  Inject
} from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { DropdownService } from "../../services/dropdown.service";
import { DDOption, DDOPTIONS } from "../../configs/dropdown.config";

import { Field } from "../event-model/event-model";
// import { Model } from "../../model.enum";

@Component({
  selector: "app-model-field-form",
  templateUrl: "./model-field-form.component.html",
  styleUrls: ["./model-field-form.component.css"]
})
export class ModelFieldFormComponent implements OnInit {
  fieldTypes: DDOption[];

  @Input() fieldData: Field;
  // @Input() model: Model;
  @Output() changeFieldData = new EventEmitter<object>();

  constructor(
    private fb: FormBuilder,
    @Inject(DDOPTIONS) dropdownOptions: DDOption[]
    // private dropdownService: DropdownService
    // this.fieldTypes = this.dropdownService.getDropdownOptions(this.model);
  ) {
    this.fieldTypes = dropdownOptions;
  }

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
