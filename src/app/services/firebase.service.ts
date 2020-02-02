import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { FirebaseApp } from "@angular/fire";
import { catchError, map, tap, subscribeOn } from "rxjs/operators";

import { Observable, of } from "rxjs";
import { CalendarMetadata } from "../model/calendar-metadata";

import { Calendar } from "../model/calendar";

@Injectable({
  providedIn: "root"
})
export class FirebaseService {
  constructor(private db: AngularFireDatabase, private af: FirebaseApp) {}

  createUser(uid, email) {
    const userRef = this.af.database().ref(`/users/${uid}`);
    userRef.once("value").then(snapshot => {
      const user = snapshot.val();

      if (!user) {
        userRef.set({ email, calendars: [{ a: "e" }] });
      }
    });

    // const userRef = this.db.list("users");
    // const existingUser = this.db.object(`/users/${uid}`).valueChanges();
    // console.log(existingUser);

    // // const userId = userRef.push({}).key;
    // userRef.set(uid, { email, calendars: [{ a: "c" }] });
    // console.log("id", uid);
  }

  getUsers() {
    const emailref = this.db.object("users/Bmo5aiKBWRXEEpCxcs4RRKfwEYz2/email");
    // const userId = userRef.push({}).key;
    const em = emailref.valueChanges();
    console.log("em", em);
    return em;
  }

  setCalendar() {
    console.log("setting cal");

    const itemRef = this.db.object("calendar");
    itemRef.set({ name: "new name!" });
  }
}
