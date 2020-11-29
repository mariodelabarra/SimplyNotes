import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { CacheService } from 'src/app/services/cache.service';

@Component({
  selector: 'app-profile-container',
  templateUrl: './profile-container.component.html',
  styleUrls: ['./profile-container.component.css']
})
export class ProfileContainerComponent extends CacheService implements OnInit {

  user: User;

  personalForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    super();

    this.user = JSON.parse(this.getItem('user')) as User;
  }

  ngOnInit(): void {

  }

}
