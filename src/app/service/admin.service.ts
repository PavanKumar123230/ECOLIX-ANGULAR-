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


 Profile(){
    const token1 = this.token.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token1
      })
    }
    return this.http.get(
      AUTH_API + 'Profile',
      httpOptions
    );
  }

  UpdateUserProfile(id: any, value: {
  name:string;
  phone:string;
  email:string;
  password:string;
}) {
  const token1 = this.token.getToken();
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token1
    })
  };
  return this.http.put(
    AUTH_API + 'Userprofile_Update/' + id,
    {
      "name":value.name,
      "phone":value.phone,
      "email":value.email,
      "password":value.password,
    },
    httpOptions
  );
}

GetPckages(){
    const token1 = this.token.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token1
      })
    }
    return this.http.get(
      AUTH_API + 'Get_Packages',
      httpOptions
    );
  }

  AddPackage(value:{
  pname: string;
  ptype: string;
}){
  const token1 = this.token.getToken();
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token1
    })
  };
  return this.http.post(
    AUTH_API + 'Add_Package',  { 
      "pname":value.pname, 
      "ptype":value.ptype,   
    },
     httpOptions 
  );
}

UpdatePackage(id: any, value: {
 pname: string;
  ptype: string;
}) {
  const token1 = this.token.getToken();
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token1
    })
  };
  return this.http.put(
    AUTH_API + 'Packageupdate/' + id,
    {
        "pname":value.pname, 
      "ptype":value.ptype,  
    },
    httpOptions
  );
}

GetPackageByid(id:any){
  const token1 = this.token.getToken();
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token1
    })
  }
  return this.http.get(
    AUTH_API + 'Get_Packagedata/'+id,
    httpOptions
  );   
}



}
