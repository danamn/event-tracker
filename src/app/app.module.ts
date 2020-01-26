import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { HttpClientModule } from "@angular/common/http";

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
// import { AngularFireDatabase } from "@angular/fire/database";

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

import { AppEffects } from "./store/effects";
import { environment } from "../environments/environment";
import { EventComponent } from "./components/event/event.component";
import { TypeModelComponent } from "./components/type-model/type-model.component";
import { ModelFormComponent } from "./components/model-form/model-form.component";
import { EntryComponent } from "./components/entry/entry.component";
import { TypeComponent } from "./components/type/type.component";
import { TypesComponent } from "./components/types/types.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { UserComponent } from "./components/user/user.component"; // Angular CLI environment
// import { UserResolver } from "./components/user/user.resolver";
import { AuthService } from "./services/auth.service";
import { UserService } from "./services/user.service";
import { AuthGuard } from "./services/auth.guard";
import { LoginRedirect } from "./services/login-redirect";

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
    ModelFormComponent,
    EntryComponent,
    TypeComponent,
    TypesComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
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
    EffectsModule.forRoot([AppEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production // Restrict extension to log-only mode
    }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule // imports firebase/auth, only needed for auth features
    // AngularFireDatabase
  ],
  providers: [
    { provide: DDOPTIONS, useValue: DROPDOWN_OPTIONS },
    GenerateIdService,
    AuthService,
    UserService,
    // UserResolver,
    AuthGuard,
    LoginRedirect
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
