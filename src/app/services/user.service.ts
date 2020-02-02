import { Injectable } from "@angular/core";
// import "rxjs/add/operator/toPromise";
import { Router } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/auth";
import * as firebase from "firebase/app";
import { AuthService } from "./auth.service";

const TTL = 1000 * 60 * 60;
interface StoredUser {
  id: string;
  expiry: Date;
}
@Injectable()
export class UserService {
  constructor(
    public afAuth: AngularFireAuth,
    private auth: AuthService,
    private router: Router
  ) {}

  getCurrentUser() {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          resolve({ user });
        } else {
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

  getUserFromStorage() {
    const userStr = localStorage.getItem("user");
    if (!userStr) {
      return null;
    }
    const user: StoredUser = JSON.parse(userStr);
    const now = new Date();
    if (now.getTime() > new Date(user.expiry).getTime()) {
      localStorage.removeItem("user");
      this.logout();
      return null;
    } else {
      this.storeUser(user.id);
    }
    return user.id;
  }

  storeUser(userId: string) {
    const now = new Date();
    const user = {
      id: userId,
      expiry: new Date(now.getTime() + TTL)
    };
    localStorage.setItem("user", JSON.stringify(user));
  }

  logout() {
    this.auth.doLogout().then(
      res => {
        this.router.navigate(["/"]);
      },
      error => {
        console.log("Logout error", error);
      }
    );
  }
}
