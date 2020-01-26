import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, Router } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/auth";
import { UserService } from "./user.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    public afAuth: AngularFireAuth,
    public userService: UserService,
    private router: Router
  ) {}

  async canActivate(): Promise<boolean> {
    console.log("authguard activated");
    // return new Promise((resolve, reject) => {
    //   console.log("inprmise");

    //   this.userService.getCurrentUser().then(
    //     user => {
    //       console.log("user", user);

    //       this.router.navigate(["/calendars"]);
    //       return resolve(false);
    //     },
    //     err => {
    //       console.log("user", err);

    //       return resolve(false);
    //     }
    //   );
    // });

    const { user, error } = await this.userService.getCurrentUser();
    if (user) {
      console.log("user");
      return true;
    }
    console.log("no user", error);
    this.router.navigate(["/login"]);
    return false;
  }
}
