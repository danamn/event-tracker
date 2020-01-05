import { InjectionToken } from "@angular/core";

import { DDOption } from "./dropdown";
export { DDOption } from "./dropdown";

export const DDOPTIONS = new InjectionToken<DDOption[]>("dd-options");

export const DROPDOWN_OPTIONS: DDOption[] = [
  { value: "date", label: "Date" },
  { value: "time", label: "Time" },
  { value: "inputField", label: "Input Field" },
  { value: "textField", label: "Text Field" },
  { value: "category", label: "Category" }
  // { value: "type", label: "Type" }
];
