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
    // private router: Router,
    private location: Location
  ) {}

  ngOnInit() {
    const urlId = this.route.snapshot.paramMap.get("id");
    if (urlId) {
      this.typeId = urlId;
      this.typeData = this.getTypeData(urlId);
    }
    // this.getEventFields();
    // this.generateFormFields();
  }

  getTypeData(id: string): Entry {
    let types: Entry[];
    this.store.pipe(select(selectTypes), take(1)).subscribe(e => {
      types = e;
    });

    const currentType = types.find(ev => ev.id === id);
    return currentType;
  }

  handleSave(eventType) {
    if (this.typeId) {
      this.store.dispatch(
        AppAction.editType({
          eventType,
          typeId: this.typeId
        })
      );
    } else {
      this.store.dispatch(AppAction.addType({ eventType }));
    }
    this.location.back();

    // this.router.navigate(['/']);
  }
}
