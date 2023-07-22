import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  private userFromDb: {
    username: string;
    password: string;
    email: string;
    gender: string;
    role: string;
    isActive: boolean;
  } = {
    username: '',
    password: '',
    email: '',
    gender: '',
    role: '',
    isActive: false,
  };
  constructor(
    private builder: FormBuilder,
    private _authService: AuthService,
    private _toastr: ToastrService,
    private _router: Router
  ) {
    sessionStorage.clear();
  }
  loginForm = this.builder.group({
    username: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.required),
  });
  handleLogin() {
    if (this.loginForm.valid) {
      // console.log(this.loginForm.value.username);
      this._authService.getByCode(this.loginForm.value.username).subscribe({
        next: (val: any) => {
          this.userFromDb.username = val.id;
          this.userFromDb.role = val.role;
          // this.userFromDb.password = val.password;
          // console.log(val);
          if (val.password === this.loginForm.value.password) {
            if (val.isActive === true) {
              sessionStorage.setItem('username', this.userFromDb.username);
              sessionStorage.setItem('userrole', this.userFromDb.role);
              this._router.navigate(['/']);
              this._toastr.success('Login successfull!', 'SUCCESS');
            } else {
              this._toastr.warning(
                'Please contact system admin to activate your user',
                'WARNING'
              );
            }
          } else {
            this._toastr.warning('Usernae or password is incorrect', 'WARNIN');
          }
        },
        error: (err: any) => {
          console.log(err);
        },
      });
    } else {
      this._toastr.warning('Please enter valid data~', 'WARNING');
    }
  }
}
