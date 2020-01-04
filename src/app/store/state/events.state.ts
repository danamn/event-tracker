import { TrEvent } from "../../model/tr-event";

// export type EventModelState = {
//   fields: Field[];
// };

// export const initialEventModelState: EventModelState = {
//   fields: []
// };

export type EventsState = {
  eventsList: TrEvent[];
};

export const initialEventsState: EventsState = {
  //   eventModel: new EventModel()
  eventsList: []
};
