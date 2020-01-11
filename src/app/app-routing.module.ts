import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CalendarsComponent } from "./components/calendars/calendars.component";
import { CalendarComponent } from "./components/calendar/calendar.component";
import { HomeComponent } from "./components/home/home.component";
import { EventModelComponent } from "./components/event-model/event-model.component";
import { TypeModelComponent } from "./components/type-model/type-model.component";
import { EventComponent } from "./components/event/event.component";
import { TypesComponent } from "./components/types/types.component";
import { TypeComponent } from "./components/type/type.component";
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
  {
    path: "calendars/:name/type-model",
    component: TypeModelComponent
  },
  {
    path: "calendars/:name/event/:id",
    component: EventComponent
  },
  {
    path: "calendars/:name/add-event",
    component: EventComponent
  },
  {
    path: "calendars/:name/types",
    component: TypesComponent
  },
  {
    path: "calendars/:name/type/:id",
    component: TypeComponent
  },
  {
    path: "calendars/:name/add-type",
    component: TypeComponent
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
