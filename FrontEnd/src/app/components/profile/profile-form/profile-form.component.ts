import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { User } from 'src/app/models/user';
import { CacheService } from 'src/app/services/cache.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css'],
  
})
export class ProfileFormComponent extends CacheService implements OnInit {

  loginError = "";
  user: User;
  personalForm: FormGroup;

  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(private formBuilder: FormBuilder, private userService: UserService,
              private snackBar: MatSnackBar) {
    super();

    this.user = JSON.parse(this.getItem('user')) as User;
    this.BuildPersonalForm();
  }

  BuildPersonalForm(): void {
    this.personalForm = this.formBuilder.group({
      Id : [this.user.id],
      Role: [this.user.role],
      DateCreate: [this.user.dateCreate],
      Username: [this.user.username, [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      FirstName: [this.user.firstName, [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      LastName: [this.user.lastName, [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      Email: [this.user.email, [Validators.required, Validators.email, Validators.minLength(8), Validators.maxLength(50)]],
      Password: [this.user.password, [Validators.required, Validators.minLength(8), Validators.maxLength(50)]],
      BirthDay: [this.user.birthDay, [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  editUser(submittedForm: FormGroup) {
    let userAux = submittedForm.value as User;
    this.userService.editUser(userAux).subscribe(
      resp => {
        this.snackBar.open("User updated successfully!!", "X", {
          panelClass: ['snack-success'],
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition
        });
      }, err => this.loginError = err);
  }

}
