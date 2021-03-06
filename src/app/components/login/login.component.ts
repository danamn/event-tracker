import { Component } from "@angular/core";
import { Router, Params } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserService } from "../../services/user.service";
import { FirebaseService } from "../../services/firebase.service";
// import { LocalStorageService } from "../../services/local-storage.service";
// import { UserService } from "../../services/user.service";

@Component({
  selector: "page-login",
  templateUrl: "login.component.html",
  styleUrls: ["login.component.css"]
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = "";

  constructor(
    public userService: UserService,
    private router: Router,
    private fb: FormBuilder,
    private firebaseService: FirebaseService // private localStorage: LocalStorageService,
  ) // private userService: UserService,
  {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  tryGoogleLogin() {
    this.userService.doGoogleLogin().then(res => {
      const {
        user: { uid, email }
      } = res;
      this.firebaseService.createUser(uid, email);
      this.userService.storeUser(uid);
      this.router.navigate(["/calendars"]);
    });
  }

  tryLogin(value) {
    this.userService.doLogin(value).then(
      res => {
        this.router.navigate(["/calendars"]);
      },
      err => {
        console.log(err);
        this.errorMessage = err.message;
      }
    );
  }
}
