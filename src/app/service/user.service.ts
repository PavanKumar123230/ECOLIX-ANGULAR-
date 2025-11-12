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



  Home(){
    const token1 = this.token.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token1
      })
    }
    return this.http.get(
      AUTH_API + 'Home',
      httpOptions
    );
  }

  GetByUserid(id: string) {
    const token1 = this.token.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token1
      })
    };
  
    return this.http.get(`${AUTH_API}GetByUserid/${id}`, httpOptions);
  }
  
  Register(value: {
    sponcerid: string;
    name: string;
    phone: string;
    email: string;
    package: string;
    product: string;
    password: string;
    address: string;
  }) {
    const token1 = this.token.getToken();
  
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token1
      })
    };
    const body = {
      sponcerid: value.sponcerid,
      name: value.name,
      phone: value.phone,
      email: value.email,
      package: value.package,
      product: value.product,
      password: value.password,
      address: value.address
    };
  
    return this.http.post(AUTH_API + 'Register', body, httpOptions);
  }
  
  GetpackagesData() {
    const token1 = this.token.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token1
      })
    };
    return this.http.get(AUTH_API + 'Get_Packages', httpOptions);
  }

  GetProductsByPackages(id: string) {
    const token1 = this.token.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token1
      })
    };
    return this.http.get(`${AUTH_API}Get_Productdatabypackage/${id}`, httpOptions);
  }


  UserDataPhone(id: string) {
    const token1 = this.token.getToken();

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token1
      })
    };
    // Construct full API URL dynamically with id
    const apiUrl = `${AUTH_API}Get_Userdatabyphoneoremail/${id}`;
  
    // Since it's a GET request, no need for a body
    return this.http.get(apiUrl, httpOptions);
  }
  
  

  TransferWallet(value: {
    regid: string;
    amount: string;
    remark: string;
    wallettype: string;
  }) {
    const token1 = this.token.getToken();

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token1
      })
    };
    const body = {
      regid: value.regid,
      amount: value.amount,
      remark: value.remark,
      wallettype: value.wallettype,
    
    };
  
    return this.http.post(AUTH_API + 'Wallet_Transefer', body, httpOptions);
  }



WalletReport(){
    const token1 = this.token.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token1
      })
    };
    return this.http.get(AUTH_API + 'Wallet_Transeferreport', httpOptions);
  }




  recivedReport(){
    const token1 = this.token.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token1
      })
    };
    return this.http.get(AUTH_API + 'Wallet_Receivereport', httpOptions);
  }
  

  DirectTeam(){
    const token1 = this.token.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token1
      })
    };
    return this.http.get(AUTH_API + 'Directteam', httpOptions);
  }
  

  Wallet(){
    const token1 = this.token.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token1
      })
    };
    return this.http.get(AUTH_API + 'Wallet_Report', httpOptions);
  }

  getProduct(){
    const token1 = this.token.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token1
      })
    };
    return this.http.get(AUTH_API + 'Get_Products', httpOptions);
  }


  WithdrawRequest(value: {
    amount: string;
    waltype: string;
  }) {
    const token1 = this.token.getToken();

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token1
      })
    };
    const body = {
      amount: value.amount,
      waltype: value.waltype,
    };
  
    return this.http.post(AUTH_API + 'Withdrawrequest', body, httpOptions);
  }

  


  Withdrawrequestdata(){
    const token1 = this.token.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token1
      })
    };
    return this.http.get(AUTH_API + 'Withdrawrequestdata_pending', httpOptions);
  }


  Withdrawcomplate(){
    const token1 = this.token.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token1
      })
    };
    return this.http.get(AUTH_API + 'Withdrawrequestdata_complete', httpOptions);
  }

  
  getProfile(){
    const token1 = this.token.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token1
      })
    };
    return this.http.get(AUTH_API + 'Profile', httpOptions);
  }



  updateProfile(id: any, value: {
    name: string;
    email: string;
    password: string;
    phone: string;
    bankname: string;
    accountno: string;
    ifsccode: string;
  }) {
    const token1 = this.token.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token1
      })
    };
  
    // ✅ Correct payload for update
    return this.http.post(
      AUTH_API + 'Profileiupdate',
      {
        id: id,
        name: value.name,
        email: value.email,
        password: value.password,
        phone: value.phone,
        bankname: value.bankname,
        accountno: value.accountno,
        ifsccode: value.ifsccode
      },
      httpOptions
    );
  }
  




  walletLevel(){
    const token1 = this.token.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token1
      })
    };
    return this.http.get(AUTH_API + 'Wallet_Level', httpOptions);
  }

  walletSponcer(){
    const token1 = this.token.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token1
      })
    };
    return this.http.get(AUTH_API + 'Wallet_Sponcer', httpOptions);
  }
  

  levelmembers(){
    const token1 = this.token.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token1
      })
    };
    return this.http.get(AUTH_API + 'Level_members', httpOptions);

  }
}
