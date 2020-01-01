import { EventType } from "../model/type";

export class EventModel {
  fields: Field[];
  constructor() {
    this.fields = [];
  }

  addField(field: Field) {
    this.fields.push(field);
  }
}

interface Field {
  name: string;
  type: "date" | "time" | "inputField" | "textField" | "dropdown" | EventType;
  categories?: string[];
}
