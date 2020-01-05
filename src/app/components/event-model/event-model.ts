import { EventType } from "../../model/type";

export interface EventModel extends Array<Field> {}
// export interface EventModel {
// fields: Field[];
// constructor() {
//   this.fields = [];
// }

// set fields(fields) {
//   this._fields = fields;
//   console.log(fields, this._fields);
// }

// get fields() {
//   return this._fields;
// }

// addField(field: Field) {
//   // console.log("fields", this.fields, field);
//   this.fields.push(field);
//   console.log(this);

//   return this;
// }
// }

export interface Field {
  name: string;
  type:
    | "date"
    | "time"
    | "inputField"
    | "textField"
    | "dropdown"
    | ""
    | EventType;
  categories?: string[];
}
