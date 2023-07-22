import { Component, OnChanges, OnInit, DoCheck } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements DoCheck {
  isLogedIn: boolean = false;
  logedInUser: string = '';
  constructor(private _authService: AuthService) {
    this.isLogedIn = _authService.IsLogedIn();
  }
  ngDoCheck(): void {
    this.logedInUser = sessionStorage.getItem('username')?.toString() || '';
    this.isLogedIn = this._authService.IsLogedIn();
  }
  ngOnInit(): void {}
}
