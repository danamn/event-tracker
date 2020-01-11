export interface EntryField {
  fieldName: string;
  fieldType:
    | "date"
    | "time"
    | "inputField"
    | "textField"
    | "dropdown"
    | "eventType"
    | "hidden";
  value: string | Date | number;
}
