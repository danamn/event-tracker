import { EventType } from "./type";

export interface ModelField {
  name: string;
  type: "date" | "time" | "inputField" | "textField" | "dropdown" | "eventType";
  categories?: string[];
  // error?: string;
}
