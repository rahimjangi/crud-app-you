import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  genders: string[] = ['male', 'female', 'other'];
  constructor(
    private builder: FormBuilder,
    private toastr: ToastrService,
    private _authService: AuthService,
    private _router: Router
  ) {}

  registrationForm = this.builder.group({
    id: this.builder.control(
      '',
      Validators.compose([Validators.required, Validators.minLength(5)])
    ),
    name: this.builder.control('', Validators.required),
    password: this.builder.control(
      '',
      Validators.compose([
        Validators.required,
      ])
    ),
    email: this.builder.control(
      '',
      Validators.compose([Validators.required, Validators.email])
    ),
    gender: this.builder.control('male'),
    role: this.builder.control(''),
    isActive: this.builder.control(false),
  });

  proceedRegistration() {
    if (this.registrationForm.valid) {
      this._authService.addUser(this.registrationForm.value).subscribe({
        next: (val: any) => {
          this.toastr.success(
            'User registration successfull, contact IT to activate user',
            'SUCCESS'
          );
          console.log(val);
          this._router.navigate(['/login']);
        },
        error: (err: any) => {
          this.toastr.warning(err, 'WARNING');
        },
      });
    } else {
      // console.log(this.registrationForm.errors);
      this.toastr.warning('Please enter valid data!', 'Warning');
      
    }
  }
}
