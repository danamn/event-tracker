export class EventType {
  id: string;
  constructor(args: object) {
    Object.keys(args).forEach(arg => (this[arg] = args[arg]));
  }
}
