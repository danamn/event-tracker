import { EventType } from "./type";

export enum ModelFieldType {
  date = "date",
  time = "time",
  inputField = "inputField",
  textField = "textField",
  dropdown = "dropdown",
  eventType = "eventType"
}

type FieldTypeType = "date" | "time";

export interface ModelField {
  name: string;
  type: "date" | "time" | "inputField" | "textField" | "dropdown" | "eventType";
  // type: ModelFieldType;
  categories?: string[];
  // error?: string;
}
