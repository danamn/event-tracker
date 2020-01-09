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
import { ModelFieldFormComponent } from "./components/model-field-form/model-field-form.component";
import { reducer } from "./store/reducer";
import { DROPDOWN_OPTIONS, DDOPTIONS } from "./configs/dropdown.config";
import { GenerateIdService } from "./services/generate-id.service";

import { AppEffects } from "./app.effects";
import { environment } from "../environments/environment";
import { EventComponent } from "./components/event/event.component";
import { TypeModelComponent } from './components/type-model/type-model.component';
import { ModelFormComponent } from './components/model-form/model-form.component'; // Angular CLI environment

@NgModule({
  declarations: [
    AppComponent,
    CalendarsComponent,
    HomeComponent,
    CalendarComponent,
    EventModelComponent,
    EventsCalendarViewComponent,
    ModelFieldFormComponent,
    EventComponent,
    TypeModelComponent,
    ModelFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    StoreModule.forRoot(
      {
        calendarReducer: reducer
      },
      {
        // metaReducers,
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true
        }
      }
    ),
    // EffectsModule.forRoot([AppEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production // Restrict extension to log-only mode
    })
  ],
  providers: [
    { provide: DDOPTIONS, useValue: DROPDOWN_OPTIONS },
    GenerateIdService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
