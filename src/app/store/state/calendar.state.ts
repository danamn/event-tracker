import { Calendar } from "../../model/calendar";

export type CalendarState = {
  currentCalendar: Calendar

};

export const initialCalendarState: CalendarState = {
  currentCalendar: null
};
