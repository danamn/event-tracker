import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Location } from "@angular/common";
import { take } from "rxjs/operators";

import { AppState } from "../../store/selectors";
import * as AppAction from "../../store/actions";
import { DataModel } from "../../model/data-model";
import {
  selectEventTypeModel,
  selectTypeTitleField
} from "../../store/selectors";

@Component({
  selector: "app-type-model",
  templateUrl: "./type-model.component.html",
  styleUrls: ["./type-model.component.css"]
})
export class TypeModelComponent implements OnInit {
  formData: DataModel;
  titleField$ = this.store.pipe(select(selectTypeTitleField));

  constructor(private location: Location, private store: Store<AppState>) {}

  ngOnInit() {
    this.formData = this.getTypeModel();
  }

  getTypeModel() {
    let tM: DataModel;

    this.store
      .pipe(select(selectEventTypeModel), take(1))
      .subscribe(typeModel => {
        tM = typeModel;
        console.log("tm", tM);
      });
    return tM;
  }

  handleSave({ dataModel, titleField }) {
    this.store.dispatch(AppAction.saveTypeModel({ eventTypeModel: dataModel }));
    this.store.dispatch(AppAction.saveTypeTitleField({ titleField }));
    this.location.back();
  }
}
