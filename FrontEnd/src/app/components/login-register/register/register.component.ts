import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  registerError = "";
  hide = true;
  isVisible: boolean;

  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router,
    private snackBar: MatSnackBar) {
    this.isVisible = false;
    this.buildRegisterForm();
   }

  ngOnInit(): void {
  }

  buildRegisterForm(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      lastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      birthDay: ['', [Validators.required]],
      username: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email, Validators.minLength(8), Validators.maxLength(50)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(50)]],
      dateCreate: [new Date(Date.now())],
      role: ['user'],
    });
  }

  register(submittedForm: FormGroup) {
    let user = new User();
    let userAux: User = Object.assign({}, user, submittedForm.value);
    user = submittedForm.value;
    let birthDayAux = submittedForm.value.birthDay.format("DD/MM/YYYY").split('/');
    user.birthDay = new Date(birthDayAux[2], birthDayAux[1]-1, birthDayAux[0]);
    this.isVisible = true;
    this.userService.createNewUser(user).subscribe(
      resp => {
        this.registerForm.reset();
        this.snackBar.open("User create successfully!!", "X", {
          panelClass: ['snack-success'],
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          duration: 2000
        });
        setTimeout(() => {
          this.router.navigate(['']);
        }, 2500);
        this.isVisible = false;
      }, err => {
        this.isVisible = false;
      }
    )
  }

}
