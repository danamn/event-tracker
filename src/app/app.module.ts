import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CalendarsComponent } from "./components/calendars/calendars.component";
import { HomeComponent } from "./components/home/home.component";
import { CalendarComponent } from "./components/calendar/calendar.component";
import { EventModelComponent } from "./components/event-model/event-model.component";
import { EventsCalendarViewComponent } from "./components/events-calendar-view/events-calendar-view.component";
import { EventModelFieldFormComponent } from "./components/event-model-field-form/event-model-field-form.component";
import { reducer as eventModelReducer } from "./store/reducers/event-model.reducer";
import { reducer as typeModelReducer } from "./store/reducers/type-model.reducer";
import { reducer as eventsReducer } from "./store/reducers/events.reducer";
import { reducer as typesReducer } from "./store/reducers/types.reducer";
import { reducer as calendarReducer } from "./store/reducers/calendar.reducer";
import { AppEffects } from "./app.effects";
import { environment } from "../environments/environment"; // Angular CLI environment

@NgModule({
  declarations: [
    AppComponent,
    CalendarsComponent,
    HomeComponent,
    CalendarComponent,
    EventModelComponent,
    EventsCalendarViewComponent,
    EventModelFieldFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    StoreModule.forRoot(
      {
        eventModel: eventModelReducer,
        typeModel: typeModelReducer,
        calendar: calendarReducer,
        types: typesReducer,
        events: eventsReducer
      },
      {
        // metaReducers,
        runtimeChecks: {
          // strictStateImmutability: true,
          // strictActionImmutability: true
        }
      }
    ),
    EffectsModule.forRoot([AppEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production // Restrict extension to log-only mode
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
