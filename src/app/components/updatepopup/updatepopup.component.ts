import { Component, Input, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserData } from 'src/app/pages/userlisting/userlisting.component';
import { AuthService } from 'src/app/services/auth.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-updatepopup',
  templateUrl: './updatepopup.component.html',
  styleUrls: ['./updatepopup.component.css'],
})
export class UpdatepopupComponent implements OnInit {
  // genders: string[] = ['male', 'female', 'other'];
  roles: string[] = ['admin', 'stuff'];
  constructor(
    private builder: FormBuilder,
    private toastr: ToastrService,
    private _authService: AuthService,
    private _router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialogRef<UpdatepopupComponent>
  ) {
    console.log(data);
  }
  ngOnInit(): void {
    this.updateForm.setValue(this.data);
    // console.log(this.updateForm.value);
  }

  updateForm = this.builder.group({
    id: this.builder.control(''),
    name: this.builder.control(''),
    email: this.builder.control(''),
    gender: this.builder.control('male'),
    password: this.builder.control(''),
    role: this.builder.control(''),
    isActive: this.builder.control(false),
  });

  updateUser() {
    if (this.updateForm.valid) {
      this._authService
        .updateUser(this.data.id, this.updateForm.value)
        .subscribe({
          next: (valany) => {
            this.dialog.close();
            this.toastr.success('Updated!', 'SUCCESS!');
          },
          error: (err: any) => {
            console.log(err);
          },
        });
    }
  }
  closeDialog() {}
}
