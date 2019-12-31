export class TrEvent {
  id: string;
  typeId: string;
  constructor(args: object) {
    Object.keys(args).forEach(arg => (this[arg] = args[arg]));
  }
}
