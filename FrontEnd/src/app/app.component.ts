import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'FrontEnd';

  _displayLogin = false;

  constructor(private authService: AuthService, private router: Router) {

  }

  ngOnInit(): void {
    this._displayLogin = false;
    this.authService.authStatus.subscribe(
      authStatus => {
        const jwt = this.authService.getToken();
        debugger;
        setTimeout(() => (this._displayLogin = !(jwt == null || jwt === ''), 0));
        if(jwt != null || jwt != ''){
          this.router.navigate(['/home']);
        }
      }
    );
  }

  get displayMenu() {
    return this._displayLogin;
  }
}
