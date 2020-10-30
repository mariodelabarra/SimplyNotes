import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { subscribeOn } from 'rxjs/operators';
import { User } from 'src/app/models/user';
import { CacheService } from 'src/app/services/cache.service';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends CacheService implements OnInit {

  loginError = "";
  loginForm: FormGroup;
  isVisible: boolean = false;

  hide = true;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService,
              private userService: UserService) {
                super();
               }

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
    let user = new User();
    user.email = submittedForm.value.email;
    this.isVisible = true;
    this.authService.login(submittedForm.value.email, submittedForm.value.password).
        subscribe(authResponse => {
          this.userService.getUserByEmail(user).subscribe(
            resp => {
              this.router.navigate(['dashboard/home']);
              if(resp != null){
                this.setItem('user', JSON.stringify(resp));
              }
            }
          );
        }, error => this.loginError = error);
  }

}
