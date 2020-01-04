import { EventModel, Field } from "../../components/event-model/event-model";

// export type EventModelState = {
//   fields: Field[];
// };

// export const initialEventModelState: EventModelState = {
//   fields: []
// };

export type EventModelState = {
  fields: Field[];
};

export const initialEventModelState: EventModelState = {
  //   eventModel: new EventModel()
  fields: []
};
