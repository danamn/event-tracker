import guid from "uuid/v1";
import { EventType } from "../model/type";
import { TypeModel } from "../model/type-model";
import { TrEvent } from "../model/tr-event";
import { EventModel } from "../event-model/event-model";

export class Calendar {
  id: string;
  name: string;
  eventModel: EventModel;
  events: TrEvent[];
  typeModel: TypeModel;
  types: EventType[];

  constructor(name: string) {
    this.id = guid();
    this.name = name;
    this.events = [];
    this.typeModel = { fields: [] };
    this.types = [];
    this.eventModel = new EventModel();
  }

  addEvent(event: TrEvent) {
    this.events.push(event);
  }
}
