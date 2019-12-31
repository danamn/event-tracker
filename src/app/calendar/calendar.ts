import { EventType } from "../model/type";
import { TypeModel } from "../model/type-model";
import { TrEvent } from "../model/tr-event";
import { EventModel } from "../model/event-model";

export class Calendar {
  id: string;
  name: string;
  eventModel: EventModel;
  events: TrEvent[];
  typeModel: TypeModel;
  types: EventType[];
}
