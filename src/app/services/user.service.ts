import { Injectable } from "@angular/core";
// import "rxjs/add/operator/toPromise";
import { AngularFireAuth } from "@angular/fire/auth";
import * as firebase from "firebase/app";

@Injectable()
export class UserService {
  constructor(public afAuth: AngularFireAuth) {}

  getCurrentUser() {
    console.log("getting user");

    return new Promise<any>((resolve, reject) => {
      const user = firebase.auth().onAuthStateChanged(function(user) {
        console.log("user", user);
        if (user) {
          resolve({ user });
        } else {
          console.log("rejected");

          resolve({ error: "No user logged in" });
        }
      });
    });
  }

  updateCurrentUser(value) {
    return new Promise<any>((resolve, reject) => {
      const user = firebase.auth().currentUser;
      user
        .updateProfile({
          displayName: value.name
        })
        .then(
          res => {
            resolve(res);
          },
          err => reject(err)
        );
    });
  }
}
