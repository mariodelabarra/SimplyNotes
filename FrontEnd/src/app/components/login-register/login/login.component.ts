import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { subscribeOn } from 'rxjs/operators';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginError = "";
  loginForm: FormGroup;
  isVisible: boolean = false;

  hide = true;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService ) { }

  ngOnInit(): void {
    this.buildLoginForm();
  }

  buildLoginForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]]
    });
  }

  login(submittedForm: FormGroup) {
    this.isVisible = true;
    this.authService.login(submittedForm.value.email, submittedForm.value.password).
        subscribe(authResponse => {
          this.router.navigate(['dashboard/home']);
        }, error => this.loginError = error);
  }

}
