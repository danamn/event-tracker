import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, Router } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/auth";
import { UserService } from "./user.service";

@Injectable()
export class LoginRedirect implements CanActivate {
  constructor(
    public afAuth: AngularFireAuth,
    public userService: UserService,
    private router: Router
  ) {}

  canActivate(): Promise<boolean> {
    console.log("redirecr activated");
    return new Promise(async (resolve, reject) => {
      console.log("inprmise");

      const { user, error } = await this.userService.getCurrentUser();

      if (user) {
        this.router.navigate(["/calendars"]);
        return resolve(false);
      }

      console.log("no user", error);

      return resolve(true);

      // user => {
      //   console.log("user", user);

      //   this.router.navigate(["/calendars"]);
      //   return resolve(false);
      // },
      // err => {
      //   console.log("user", err);

      //   return resolve(false);
      // }
      // );

      // const user = await this.userService.getCurrentUser();
      // if (user) {
      //   console.log("user");
      //   this.router.navigate(["/calendars"]);
      //   return false;
      // }
      // console.log("no user");
      // return true;
    });
  }
}
