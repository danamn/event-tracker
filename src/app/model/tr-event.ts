export interface TrEvent {
  id: string;
  typeId: string;
  [key: string]: string | Date | number;
  // constructor(args: object) {
  //   Object.keys(args).forEach(arg => (this[arg] = args[arg]));
  // }
}
