import guid from "uuid/v1";
import { EventType } from "./type";
import { TypeModel } from "./type-model";
import { TrEvent } from "./tr-event";
import { DataModel } from "./data-model";

export interface Calendar {
  id: string;
  name: string;
  // eventModel: DataModel;
  // events: TrEvent[];
  // typeModel: TypeModel;
  // types: EventType[];

  // constructor(name: string) {
  //   this.id = guid();
  //   this.name = name;
  //   this.events = [];
  //   this.typeModel = { fields: [] };
  //   this.types = [];
  //   this.eventModel = new DataModel();
  // }

  // addEvent(event: TrEvent) {
  //   this.events.push(event);
  // }
}
