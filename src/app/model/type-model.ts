export interface TypeModel {
  fields: TMField[];
}

export interface TMField {
  name: string;
  type: "date" | "time" | "inputField" | "textField" | "dropdown";
  categories?: string[];
}
