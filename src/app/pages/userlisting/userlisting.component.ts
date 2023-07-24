import {
  AfterViewInit,
  Component,
  DoCheck,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AuthService } from 'src/app/services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { UpdatepopupComponent } from 'src/app/components/updatepopup/updatepopup.component';

export interface UserData {
  id: string;
  name: string;
  password: string;
  email: string;
  gender: string;
  role: string;
  isActive: boolean;
}

@Component({
  selector: 'app-userlisting',
  templateUrl: './userlisting.component.html',
  styleUrls: ['./userlisting.component.css'],
})
export class UserlistingComponent implements AfterViewInit, OnInit, DoCheck {
  displayedColumns: string[] = [
    'id',
    'name',
    'password',
    'email',
    'gender',
    'role',
    'isActive',
    'Action',
  ];
  dataSource!: MatTableDataSource<UserData>;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private _authService: AuthService, private dialog: MatDialog) {
    this.loadData();
  }
  ngDoCheck(): void {
    // this._authService.getAll().subscribe({
    //   next: (val: any) => {
    //     this.dataSource = new MatTableDataSource(val);
    //     this.dataSource.paginator = this.paginator;
    //     this.dataSource.sort = this.sort;
    //   },
    //   error: (err: any) => {
    //     console.log(err);
    //   },
    // });
  }
  ngOnInit(): void {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }
  ngAfterViewInit(): void {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  activateUser(id: any) {
    let userToUpdate: UserData = this.dataSource.data.filter(
      (item) => item.id == id
    )[0];
    const dialog = this.dialog.open(UpdatepopupComponent, {
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '500ms',
      width: '30%',
      data: userToUpdate,
    });
    dialog.afterClosed().subscribe({
      next: (val: any) => {
        this.loadData();
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
  loadData() {
    this._authService.getAll().subscribe({
      next: (val: any) => {
        this.dataSource = new MatTableDataSource(val);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
  inActivateUser(id: any) {
    let userToUpdate: UserData = this.dataSource.data.filter(
      (item) => item.id == id
    )[0];
    userToUpdate.isActive = false;
    userToUpdate.role = 'user';
    this._authService.updateUser(id, userToUpdate).subscribe({
      next: (val: any) => {
        console.log(val);
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
  openDialog() {}
}
