import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CalendarsComponent } from "./components/calendars/calendars.component";
import { CalendarComponent } from "./components/calendar/calendar.component";
import { HomeComponent } from "./components/home/home.component";
import { EventModelComponent } from "./components/event-model/event-model.component";
import { EventsCalendarViewComponent } from "./components/events-calendar-view/events-calendar-view.component";

const appRoutes: Routes = [
  { path: "calendars", component: CalendarsComponent },
  { path: "calendars/:name", component: CalendarComponent },
  {
    path: "calendars/:name/calendar-view",
    component: EventsCalendarViewComponent
  },
  {
    path: "calendars/:name/event-model",
    component: EventModelComponent
  },
  // {
  //   path: 'heroes',
  //   component: HeroListComponent,
  //   data: { title: 'Heroes List' }
  // },
  { path: "", component: HomeComponent }
  // { path: "", redirectTo: "/heroes", pathMatch: "full" }
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
