import { Injectable } from "@angular/core";
import { AngularFireDatabase, AngularFireObject } from "@angular/fire/database";
import { FirebaseApp } from "@angular/fire";
import { catchError, map, tap, subscribeOn, mergeMap } from "rxjs/operators";

import { Observable, of, from } from "rxjs";
import { CalendarMetadata } from "../model/calendar-metadata";
// import { LocalStorageService } from "./local-storage.service";
import { UserService } from "./user.service";
import { Calendar } from "../model/calendar";
import { setCalendarMetadata } from "../store/actions";

@Injectable({
  providedIn: "root"
})
export class FirebaseService {
  constructor(
    private db: AngularFireDatabase,
    private af: FirebaseApp,
    // private localStorage: LocalStorageService,
    private userService: UserService
  ) {}

  createUser(uid, email) {
    const userRef = this.af.database().ref(`/users/${uid}`);
    userRef.once("value").then(snapshot => {
      const user = snapshot.val();

      if (!user) {
        userRef.set({ email, calendars: [{ a: "e" }] });
      }
    });

    // const users$ = this.db.list("users");
    // const existingUser$: Observable<any> = this.db
    //   .object(`/users/${uid}`)
    //   .valueChanges();
    // existingUser$.subscribe(user => console.log("usr", user));
    // console.log(existingUser);

    // // const userId = userRef.push({}).key;
    // userRef.set(uid, { email, calendars: [{ a: "c" }] });
    // console.log("id", uid);
  }

  getCalendarsOld() {
    const userId: string = this.userService.getUserFromStorage();
    if (!userId) return null;

    const calendarsRef = this.af.database().ref(`users/${userId}/calendarList`);
    return calendarsRef.once("value").then(snapshot => {
      const calendars = snapshot.val();

      if (calendars) {
        console.log("ca", calendars);

        return of(calendars);
      }
    });
  }

  getCalendars(): Observable<any[]> {
    const userId: string = this.userService.getUserFromStorage();
    if (!userId) return null;
    const path = `users/${userId}/calendarList`;
    console.log("called get cals", path);
    // const ref =
    return this.db.list(path).valueChanges();
  }

  loadCalendar(id) {
    const userId: string = this.userService.getUserFromStorage();
    if (!userId) return null;
    const path = `users/${userId}/calendars/${id}`;
    console.log("called get cals", path);
    // const ref =
    return this.db.object(path).valueChanges();
  }

  // loadCalendar(id) {
  //   const userId: string = this.userService.getUserFromStorage();
  //   if (!userId) return null;

  //   const calendarRef = this.af
  //     .database()
  //     .ref(`users/${userId}/calendars/${id}`);
  //   return calendarRef.once("value").then(snapshot => {
  //     const calendar = snapshot.val();

  //     if (calendar) {
  //       console.log("calendar", calendar);
  //       return of(calendar);
  //     }
  //     return null;
  //   });
  // }

  setEventModel(calendarId, eventModel) {
    const userId: string = this.userService.getUserFromStorage();

    const path = `users/${userId}/calendars/${calendarId}/eventModel`;
    const eventModelRef = this.db.object(path);

    return from(eventModelRef.set(eventModel)).pipe(
      map(res => of(res)),
      catchError(error => {
        throw new Error(error);
      })
    );
  }

  setTypeModel(calendarId, typeModel) {
    const userId: string = this.userService.getUserFromStorage();

    const path = `users/${userId}/calendars/${calendarId}/eventTypeModel`;
    const typeModelRef = this.db.object(path);

    return from(typeModelRef.set(typeModel)).pipe(
      map(res => of(res)),
      catchError(error => {
        throw new Error(error);
      })
    );
  }

  setTitleField(calendarId, fieldName, titleFieldType) {
    const userId: string = this.userService.getUserFromStorage();

    const path = `users/${userId}/calendars/${calendarId}/${titleFieldType}`;
    const ref = this.db.object(path);

    return from(ref.set(fieldName)).pipe(
      map(res => of(res)),
      catchError(error => {
        throw new Error(error);
      })
    );
  }

  editEvent(calendarId, trEvent, eventId) {
    const userId: string = this.userService.getUserFromStorage();
    const path = `users/${userId}/calendars/${calendarId}/events`;
    console.log("path", path, trEvent, eventId);

    if (!eventId) {
      const eventsRef = this.db.list(path);
      return from(eventsRef.push(trEvent)).pipe(
        map(res => {
          const id = res.key;
          return id;
        }),
        catchError(error => {
          throw new Error(error);
        })
      );
    } else {
      const eventRef = this.db.list(`${path}`);
      return from(eventRef.update(eventId, trEvent)).pipe(
        map(res => eventId),
        catchError(error => {
          throw new Error(error);
        })
      );
    }
  }

  deleteEvent(calendarId, eventId) {
    const userId: string = this.userService.getUserFromStorage();
    const path = `users/${userId}/calendars/${calendarId}/events`;
    console.log("path", path, eventId);

    const eventRef = this.db.object(`${path}/${eventId}`);
    return from(eventRef.remove()).pipe(
      map(res => eventId),
      catchError(error => {
        throw new Error(error);
      })
    );
  }

  editType(calendarId, eventType, typeId) {
    const userId: string = this.userService.getUserFromStorage();
    const path = `users/${userId}/calendars/${calendarId}/types`;
    console.log("path", path, eventType, typeId);

    if (!typeId) {
      const typeRef = this.db.list(path);
      return from(typeRef.push(eventType)).pipe(
        map(res => {
          const id = res.key;
          return id;
        }),
        catchError(error => {
          throw new Error(error);
        })
      );
    } else {
      const typeRef = this.db.object(`${path}/${typeId}`);
      return from(typeRef.set(eventType)).pipe(
        map(res => typeId),
        catchError(error => {
          throw new Error(error);
        })
      );
    }
  }

  deleteType(calendarId, typeId) {
    const userId: string = this.userService.getUserFromStorage();
    const path = `users/${userId}/calendars/${calendarId}/types`;
    console.log("path", path, typeId);

    const eventRef = this.db.object(`${path}/${typeId}`);
    return from(eventRef.remove()).pipe(
      map(res => typeId),
      catchError(error => {
        throw new Error(error);
      })
    );
  }

  createCalendar(calendar: Calendar) {
    const userId: string = this.userService.getUserFromStorage();

    const calendarsPath = `users/${userId}/calendars`;
    const calendarListPath = `users/${userId}/calendarList`;
    console.log("setting cal create ", calendarsPath);
    const calendarsRef = this.db.list(calendarsPath);
    const calendarListRef = this.db.list(calendarListPath);

    // try {
    //   const res = await calendarsRef.push(calendar);
    //   const id = res.key;

    //   return from(
    //     calendarListRef.push({ calendarName: calendar.name, id })
    //   ).pipe(
    //     map(res => {
    //       return id;
    //     }),
    //     catchError(error => {
    //       throw new Error(error);
    //     })
    //   );
    // } catch (err) {
    //   throw new Error(err);
    // }

    return from(calendarsRef.push(calendar)).pipe(
      map(res => {
        const id = res.key;
        return id;
      }),
      map(id => {
        console.log("id", id);

        try {
          calendarListRef.push({ name: calendar.name, id });

          return id;
        } catch (error) {
          console.log(
            "there was an error saving the calendar to the calendarList",
            error
          );
        }
      }),
      catchError(error => {
        throw new Error(error);
      })
    );
  }
}

//   setCalendarMetadata({id, name}) {
//     const userId: string = this.userService.getUserFromStorage();

//     console.log("setting cal metadata");
//     const path = `users/${userId}/calendars/${calendarId}`
//     const itemRef = this.db.object("calendar");
//     itemRef.set({ name: "new name!" });
//   }
// }
