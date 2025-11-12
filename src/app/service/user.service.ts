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

  //silver users data

    SilverManager1(){
    const token1 = this.token.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token1
      })
    };
    return this.http.get(AUTH_API + 'SilverManager_Onedata', httpOptions);
  }

      SilverManager2(){
    const token1 = this.token.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token1
      })
    };
    return this.http.get(AUTH_API + 'SilverManager_Twodata', httpOptions);
  }

      SilverManager3(){
    const token1 = this.token.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token1
      })
    };
    return this.http.get(AUTH_API + 'SilverManager_Threedata', httpOptions);
  }

      SilverManager4(){
    const token1 = this.token.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token1
      })
    };
    return this.http.get(AUTH_API + 'SilverManager_Fourdata', httpOptions);
  }

      SilverManager5(){
    const token1 = this.token.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token1
      })
    };
    return this.http.get(AUTH_API + 'SilverManager_Fivedata', httpOptions);
  }

      SilverManager6(){
    const token1 = this.token.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token1
      })
    };
    return this.http.get(AUTH_API + 'SilverManager_Sixdata', httpOptions);
  }

      SilverManager7(){
    const token1 = this.token.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token1
      })
    };
    return this.http.get(AUTH_API + 'Silver_BusinessManagerdata', httpOptions);
  }

      SilverManager8(){
    const token1 = this.token.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token1
      })
    };
    return this.http.get(AUTH_API + 'Silver_Directordata', httpOptions);
  }

  //gold users data

  GoldManager1(){
    const token1 = this.token.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token1
      })
    };
    return this.http.get(AUTH_API + 'GoldManager_Onedata', httpOptions);
  }

     GoldManager2(){
    const token1 = this.token.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token1
      })
    };
    return this.http.get(AUTH_API + 'GoldManager_Twodata', httpOptions);
  }

    GoldManager3(){
    const token1 = this.token.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token1
      })
    };
    return this.http.get(AUTH_API + 'GoldManager_Threedata', httpOptions);
  }

   GoldManager4(){
    const token1 = this.token.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token1
      })
    };
    return this.http.get(AUTH_API + 'GoldManager_Fourdata', httpOptions);
  }

   GoldrManager5(){
    const token1 = this.token.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token1
      })
    };
    return this.http.get(AUTH_API + 'GoldManager_Fivedata', httpOptions);
  }

      GoldManager6(){
    const token1 = this.token.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token1
      })
    };
    return this.http.get(AUTH_API + 'GoldManager_Sixdata', httpOptions);
  }

     GoldManager7(){
    const token1 = this.token.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token1
      })
    };
    return this.http.get(AUTH_API + 'Gold_BusinessManagerdata', httpOptions);
  }

      GoldManager8(){
    const token1 = this.token.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token1
      })
    };
    return this.http.get(AUTH_API + 'Gold_Directordata', httpOptions);
  }

  //dimaond users data 
 DiamondManager1(){
    const token1 = this.token.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token1
      })
    };
    return this.http.get(AUTH_API + 'DiamondManager_Onedata', httpOptions);
  }

     DiamondManager2(){
    const token1 = this.token.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token1
      })
    };
    return this.http.get(AUTH_API + 'DiamondManager_Twodata', httpOptions);
  }

    DiamondManager3(){
    const token1 = this.token.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token1
      })
    };
    return this.http.get(AUTH_API + 'DiamondManager_Threedata', httpOptions);
  }

   DiamondManager4(){
    const token1 = this.token.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token1
      })
    };
    return this.http.get(AUTH_API + 'DiamondManager_Fourdata', httpOptions);
  }

   DiamondManager5(){
    const token1 = this.token.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token1
      })
    };
    return this.http.get(AUTH_API + 'DiamondManager_Fivedata', httpOptions);
  }

      DiamondManager6(){
    const token1 = this.token.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token1
      })
    };
    return this.http.get(AUTH_API + 'DiamondManager_Sixdata', httpOptions);
  }

     DiamondManager7(){
    const token1 = this.token.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token1
      })
    };
    return this.http.get(AUTH_API + 'Diamond_BusinessManagerdata', httpOptions);
  }

      DiamondManager8(){
    const token1 = this.token.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token1
      })
    };
    return this.http.get(AUTH_API + 'Diamond_Directordata', httpOptions);
  }
  

}
