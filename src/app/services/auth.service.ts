// import { Injectable } from "@angular/core";
// import { Router } from "@angular/router";

// // import "rxjs/add/operator/toPromise";
// import { AngularFireAuth } from "@angular/fire/auth";
// import * as firebase from "firebase/app";
// import { FirebaseService } from "./firebase.service";
// import { UserService } from "./user.service";

// @Injectable()
// export class AuthService {
//   constructor(
//     public afAuth: AngularFireAuth,
//     private user: UserService,
//     private firebase: FirebaseService,
//     private router: Router
//   ) {}

//   doGoogleLogin() {
//     return new Promise<any>((resolve, reject) => {
//       let provider = new firebase.auth.GoogleAuthProvider();
//       provider.addScope("profile");
//       provider.addScope("email");
//       this.afAuth.auth.signInWithPopup(provider).then(
//         res => {
//           const {
//             user: { uid, email }
//           } = res;
//           this.firebase.createUser(uid, email);
//           this.user.storeUser(uid);
//           resolve(res);
//         },
//         err => {
//           console.log(err);
//           reject(err);
//         }
//       );
//     });
//   }

//   doRegister(value) {
//     return new Promise<any>((resolve, reject) => {
//       firebase
//         .auth()
//         .createUserWithEmailAndPassword(value.email, value.password)
//         .then(
//           res => {
//             resolve(res);
//           },
//           err => reject(err)
//         );
//     });
//   }

//   doLogin(value) {
//     return new Promise<any>((resolve, reject) => {
//       firebase
//         .auth()
//         .signInWithEmailAndPassword(value.email, value.password)
//         .then(
//           res => {
//             resolve(res);
//           },
//           err => reject(err)
//         );
//     });
//   }

//   doLogout() {
//     return new Promise((resolve, reject) => {
//       console.log("logging out");

//       if (firebase.auth().currentUser) {
//         this.afAuth.auth.signOut();
//         resolve();
//       } else {
//         reject();
//       }
//     });
//   }

//   logout() {
//     this.doLogout().then(
//       res => {
//         this.router.navigate(["/"]);
//       },
//       error => {
//         console.log("Logout error", error);
//       }
//     );
//   }
// }
