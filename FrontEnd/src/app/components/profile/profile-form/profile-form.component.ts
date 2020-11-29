import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { CacheService } from 'src/app/services/cache.service';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent extends CacheService implements OnInit {

  user: User;
  personalForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    super();

    this.user = JSON.parse(this.getItem('user')) as User;
    this.BuildPersonalForm();
  }

  BuildPersonalForm(): void {
    this.personalForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      lastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      email: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(50)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(50)]],
      //BirthDay: ['']
    });
  }

  ngOnInit(): void {
  }

}
