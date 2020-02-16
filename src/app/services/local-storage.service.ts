// import { Injectable } from "@angular/core";

// const TTL = 1000 * 60 * 60;

// interface StoredUser {
//   id: string;
//   expiry: Date;
// }
// @Injectable({
//   providedIn: "root"
// })
// export class LocalStorageService {
//   constructor() {}

//   getUserFromStorage() {
//     const userStr = localStorage.getItem("user");
//     if (!userStr) {
//       return null;
//     }
//     const user: StoredUser = JSON.parse(userStr);
//     const now = new Date();
//     if (now.getTime() > new Date(user.expiry).getTime()) {
//       localStorage.removeItem("user");
//       // this.logout();
//       return null;
//     } else {
//       this.storeUser(user.id);
//       return user.id;
//     }
//   }

//   storeUser(userId: string) {
//     const now = new Date();
//     const user = {
//       id: userId,
//       expiry: new Date(now.getTime() + TTL)
//     };
//     localStorage.setItem("user", JSON.stringify(user));
//   }
// }
