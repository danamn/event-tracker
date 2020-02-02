export interface Entry {
  id: string;
  typeId?: string;
  [key: string]: string | Date | number;
  // constructor(args: object) {
  //   Object.keys(args).forEach(arg => (this[arg] = args[arg]));
  // }
}
// import { EntryField } from "./entry-field";
// export interface Entry extends Array<EntryField> {}

export interface Entries {
  [key: string]: Entry;
}
