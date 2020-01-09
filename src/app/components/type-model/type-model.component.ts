import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Location } from "@angular/common";
import { take } from "rxjs/operators";

import { AppState } from "../../store/selectors";
import * as AppAction from "../../store/actions";
import { DataModel } from "../../model/data-model";
import { ModelField } from "../../model/model-field";
import { selectEventTypeModel } from "../../store/selectors";

@Component({
  selector: "app-type-model",
  templateUrl: "./type-model.component.html",
  styleUrls: ["./type-model.component.css"]
})
export class TypeModelComponent implements OnInit {
  formData: DataModel;

  constructor(private location: Location, private store: Store<AppState>) {}

  ngOnInit() {
    this.formData = this.getTypeModel();
  }

  getTypeModel() {
    let tM: DataModel;

    this.store
      .pipe(select(selectEventTypeModel), take(1))
      .subscribe(typeModel => {
        console.log(tM);

        tM = typeModel;
      });
    return tM;
  }

  handleSave(eventTypeModel) {
    this.store.dispatch(AppAction.setTypeModel({ eventTypeModel }));
    this.location.back();
  }
}
