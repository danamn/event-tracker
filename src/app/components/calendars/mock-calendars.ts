import { CalendarMetadata } from "../../model/calendar-metadata";

// const c1 = new Calendar("calendar 1");
// const c2 = new Calendar("calendar 2");
const c1 = { id: "c1", name: "calendar1" };
const c2 = {
  id: "c2",
  name: "calendar2"
};
const CALENDARS: CalendarMetadata[] = [c1, c2];

export { CALENDARS };

// export const CALENDARS: Calendar[] = [
//   {
//     id: "c1",
//     name: "calendar1",
//     eventModel: { fields: [] },
//     typeModel: { fields: [] },
//     events: [],
//     types: []
//   },
//   {
//     id: "c2",
//     name: "calendar2",
//     eventModel: { fields: [] },
//     typeModel: { fields: [] },
//     events: [],
//     types: []
//   }
// ];
