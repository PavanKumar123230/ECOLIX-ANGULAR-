import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from './token-storage.service';
import { Observable } from 'rxjs';

const AUTH_API ='https://orgaliv.store/ETCNGT/ETCNGT/Admin/'
@Injectable({
  providedIn: 'root'
})
export class AdminService {

    constructor(private http: HttpClient, private router:Router, public token: TokenStorageService) { }

    AdminDashboard() {
  const token1 = this.token.getToken();
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token1
    })
  };
  return this.http.get(
    AUTH_API + 'Home',
    httpOptions
  );
}



}
