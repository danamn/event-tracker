import { EventType } from "./type";

export class EventModel {
  fields: Field[];
}

interface Field {
  name: string;
  type: "date" | "time" | "inputField" | "textField" | "dropdown" | EventType;
  categories?: string[];
}
