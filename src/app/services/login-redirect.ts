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
    return new Promise(async (resolve, reject) => {
      const { user, error } = await this.userService.getCurrentUser();

      if (user) {
        this.router.navigate(["/calendars"]);
        return resolve(false);
      }
      return resolve(true);
    });
  }
}
