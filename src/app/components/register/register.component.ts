import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, of } from "rxjs";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import { FirebaseService } from "../../services/firebase.service";
import { UserService } from "../../services/user.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent {
  registerForm: FormGroup;
  errorMessage: string = "";
  successMessage: string = "";
  email$: Observable<any>;

  constructor(
    public authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private firebase: FirebaseService,
    private user: UserService
  ) {
    this.createForm();
  }

  createForm() {
    this.registerForm = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  tryGoogleLogin() {
    this.authService.doGoogleLogin().then(
      res => {
        const {
          user: { uid, email }
        } = res;
        this.firebase.createUser(uid, email);
        this.user.storeUser(uid);
        this.router.navigate(["/calendars"]);
      },
      err => console.log(err)
    );
  }

  tryRegister(value) {
    this.authService.doRegister(value).then(
      res => {
        console.log(res);
        this.errorMessage = "";
        this.successMessage = "Your account has been created";
      },
      err => {
        console.log(err);
        this.errorMessage = err.message;
        this.successMessage = "";
      }
    );
  }
}
