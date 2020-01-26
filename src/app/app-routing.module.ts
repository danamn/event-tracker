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
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
// import { UserComponent } from "./components/user/user.component";
import { EventsCalendarViewComponent } from "./components/events-calendar-view/events-calendar-view.component";
// import { UserResolver } from "./components/user/user.resolver";
import { AuthGuard } from "./services/auth.guard";
import { LoginRedirect } from "./services/login-redirect";

const appRoutes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent, canActivate: [LoginRedirect] },
  {
    path: "register",
    component: RegisterComponent,
    canActivate: [LoginRedirect]
  },
  {
    path: "calendars",
    canActivate: [AuthGuard],
    children: [
      { path: "", component: CalendarsComponent },
      { path: ":name", component: CalendarComponent },
      {
        path: ":name/calendar-view",
        component: EventsCalendarViewComponent
      },
      {
        path: ":name/event-model",
        component: EventModelComponent
      },
      {
        path: ":name/type-model",
        component: TypeModelComponent
      },
      {
        path: ":name/event/:id",
        component: EventComponent
      },
      {
        path: ":name/add-event",
        component: EventComponent
      },
      {
        path: ":name/types",
        component: TypesComponent
      },
      {
        path: ":name/type/:id",
        component: TypeComponent
      },
      {
        path: ":name/add-type",
        component: TypeComponent
      }
    ]
  }

  // { path: "user", component: UserComponent, resolve: { data: UserResolver } }
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
