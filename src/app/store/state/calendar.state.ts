import { Calendar } from "../../components/calendar/calendar";

export type CalendarState = {
  currentCalendar: Calendar

};

export const initialCalendarState: CalendarState = {
  currentCalendar: null
};
