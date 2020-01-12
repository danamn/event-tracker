// import { Injectable } from "@angular/core";
// import { Inject } from "@angular/core";

// import { DDOption, DDOPTIONS } from "../configs/dropdown.config";
// import { Model } from "../modelFieldType.enum";

// @Injectable({
//   providedIn: "root"
// })
// export class DropdownService {
//   dropdownOptions: DDOption[];
//   constructor(@Inject(DDOPTIONS) dropdownOptions: DDOption[]) {
//     this.dropdownOptions = dropdownOptions;
//   }

//   getDropdownOptions(model: string) {
//     if (model === Model.event) {
//       return this.dropdownOptions;
//     }
//     return this.dropdownOptions.filter(op => op.value !== "type");
//   }
// }
