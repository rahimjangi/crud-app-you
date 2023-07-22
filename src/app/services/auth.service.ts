import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl: string = 'http://localhost:3000/user';

  constructor(private _http: HttpClient) {}

  getAll() {
    return this._http.get(this.apiUrl);
  }

  getByCode(id: any) {
    return this._http.get(this.apiUrl+`/${id}`);
  }
  addUser(user: any) {
    return this._http.post(this.apiUrl, user);
  }

  updateUser(id:any,user: any) {
    return this._http.put(this.apiUrl+`/${id}`, user);
  }

  IsLogedIn() {
    return sessionStorage.getItem("username")!=null;
  }

  getUserRole() {
    return sessionStorage.getItem("userrole")? sessionStorage.getItem("userrole")?.toString():'';
  }
}
