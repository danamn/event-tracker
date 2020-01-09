
import { ModelField } from "../model/model-field";


export interface TypeModel extends Array<ModelField> {}

// export interface TypeModel {
//   fields: TMField[];
// }

// export interface TMField {
//   name: string;
//   type: "date" | "time" | "inputField" | "textField" | "dropdown" ;
//   categories?: string[];
//   error?: string;
// }
