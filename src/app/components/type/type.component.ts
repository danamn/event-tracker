import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { take } from "rxjs/operators";
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from "@angular/common";

import { Entry } from "../../model/entry";
import {
  selectEventTypeModel,
  selectTypes,
  AppState
} from "../../store/selectors";
import * as AppAction from "../../store/actions";

@Component({
  selector: "app-type",
  templateUrl: "./type.component.html",
  styleUrls: ["./type.component.css"]
})
export class TypeComponent implements OnInit {
  typeModel$ = this.store.pipe(select(selectEventTypeModel));

  typeData: Entry;
  typeId: string;

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    console.log("type");
    const urlId = this.route.snapshot.paramMap.get("id");
    if (urlId) {
      this.typeId = urlId;
      this.typeData = this.getTypeData(urlId);
    }
  }

  getTypeData(id: string): Entry {
    let types: Record<string, Entry>;
    this.store.pipe(select(selectTypes), take(1)).subscribe(e => {
      types = e;
    });

    const currentType = types[id];
    return currentType;
  }

  handleSave({ entry: eventType }) {
    this.store.dispatch(
      AppAction.saveType({
        eventType,
        typeId: this.typeId
      })
    );

    this.location.back();

    // this.router.navigate(['/']);
  }
}
