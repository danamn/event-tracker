import { EventType } from "./type";
import { TypeModel } from "./type-model";
import { TrEvent } from "./tr-event";
import { EventModel } from "./event-model";

export class Calendar {
  id: string;
  name: string;
  eventModel: EventModel;
  events: TrEvent[];
  typeModel: TypeModel;
  types: EventType[];
}
