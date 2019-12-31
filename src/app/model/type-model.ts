export class TypeModel {
  fields: Field[];
}

interface Field {
  name: string;
  type: "date" | "time" | "inputField" | "textField" | "dropdown";
  categories?: string[];
}
