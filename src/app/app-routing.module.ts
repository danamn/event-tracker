import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CalendarsComponent } from "./calendars/calendars.component";
import { CalendarComponent } from "./calendar/calendar.component";
import { HomeComponent } from "./home/home.component";

const appRoutes: Routes = [
  { path: "calendars", component: CalendarsComponent },
  { path: "calendar/:id", component: CalendarComponent },
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
