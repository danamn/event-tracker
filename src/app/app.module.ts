import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { CalendarsComponent } from "./calendars/calendars.component";
import { HomeComponent } from "./home/home.component";
import { AppRoutingModule } from "./app-routing.module";
import { CalendarComponent } from "./calendar/calendar.component";
import { EventModelComponent } from "./event-model/event-model.component";
import { EventsCalendarViewComponent } from "./events-calendar-view/events-calendar-view.component";

@NgModule({
  declarations: [
    AppComponent,
    CalendarsComponent,
    HomeComponent,
    CalendarComponent,
    EventModelComponent,
    EventsCalendarViewComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
