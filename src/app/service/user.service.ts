import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenStorageService } from './token-storage.service';
import { Observable } from 'rxjs';

  const AUTH_API ='https://orgaliv.store/ETCNGT/ETCNGT/User/'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, public token: TokenStorageService) { }

  //   UserRegistration(value: any){
  //   return this.http.post(
  //     AUTH_API + 'Register', value, {
  //       responseType: 'json',
  //     });
  // }



}
