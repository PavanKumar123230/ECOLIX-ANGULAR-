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

 AdminRegistration(value: any) {
  const token1 = this.token.getToken();
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token1
    })
  };

  return this.http.post(
    AUTH_API + 'Register',
    {
      "sponcerid": value.sponcerid,
      "name": value.name,
      "phone": value.phone,
      "email": value.email,
      "password": value.password,
      "product": value.product,
    },
    httpOptions
  );
}
 GetJoiningPackage(){
    const token1 = this.token.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token1
      })
    }
    return this.http.get(
      AUTH_API + 'Get_JoinPackages',
      httpOptions
    );
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

//   UpdateUserProfile(id: any, value: {
//     user:string;
//   phone:string;
//   email:string;
//   password:string;
// }) {
//   const token1 = this.token.getToken();
//   const httpOptions = {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json',
//       'Authorization': 'Bearer ' + token1
//     })
//   };
//   return this.http.put(
//     AUTH_API + 'Profile_Update/' + id,
//     {
//       "user":value.user,
//       "phone":value.phone,
//       "email":value.email,
//       "password":value.password,
//     },
//     httpOptions
//   );
// }

UpdateUserProfile(
  regid: any,
  value: {
    user: string;
    phone: string;
    email: string;
    password: string;
  }
) {
  const token1 = this.token.getToken();

  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token1
    })
  };

  return this.http.put(
    AUTH_API + 'Userprofile_Update/' + regid,  // 👈 updated endpoint
    {
      user: value.user,
      phone: value.phone,
      email: value.email,
      password: value.password
    },
    httpOptions
  );
}





adminProfile(regid: any, value: { user: string; phone: string; email: string; password: string; }) {
  const token1 = this.token.getToken();

  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token1
    })
  };

  return this.http.put(
    AUTH_API + 'Profile_Update/' + regid,
    {
      user: value.user,
      phone: value.phone,
      email: value.email,
      password: value.password
    },
    httpOptions
  );
}






GetPackages(){
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

//add products
 GetProducts(){
    const token1 = this.token.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token1
      })
    }
    return this.http.get(
      AUTH_API + 'Get_Products',
      httpOptions
    );
  }

  AddProducts(value: {
  name: string;
  amount: number;
  package: string;
  gst: number;
  content: string;
}) {
  const token1 = this.token.getToken();
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token1
    })
  };

  return this.http.post(
    AUTH_API + 'Add_Product',
    {
      name: value.name,
      amount: value.amount,
      package: value.package,
      gst: value.gst,      
      content: value.content,  
    },
    httpOptions
  );
}


UpdateUserProduct(id: any, value: {
  name: string;
  amount: number;
  package: string;
  gst: number;
  content: string;
}) {
  const token1 = this.token.getToken();
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token1
    })
  };
  return this.http.put(
    AUTH_API + 'Product_update/' + id,
    {
        name: value.name,
      amount: value.amount,
      package: value.package,
      gst: value.gst,      
      content: value.content, 
    },
    httpOptions
  );
}

GetProductByid(id:any){
  const token1 = this.token.getToken();
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token1
    })
  }
  return this.http.get(
    AUTH_API + 'Get_Productdata/'+id,
    httpOptions
  );   
}

GetTodayActiveUsers(){
  const token1 = this.token.getToken();
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token1
    })
  }
  return this.http.get(
    AUTH_API + 'Today_Active',
    httpOptions
  );   
}

GetTodayJoinUsers(){
  const token1 = this.token.getToken();
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token1
    })
  }
  return this.http.get(
    AUTH_API + 'Today_joins',
    httpOptions
  );   
}

TotalMembers() {
  const token1 = this.token.getToken();
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token1
    })
  };
  return this.http.get(
    AUTH_API + 'Total_Userslist',
    httpOptions
  );
}

searchUsers(qry:string) {
  const token1 = this.token.getToken();
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token1
    })
  };
  return this.http.get(
    AUTH_API + `Total_Userslist?q=${qry}`,
    httpOptions
  );
}

TotalUsers(page: number, perPage: number) {
  const token1 = this.token.getToken();
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token1
    })
  };
  const pageDetails = `page=${page}&per_page=${perPage}`;
  return this.http.get(
    AUTH_API + `Total_users?${pageDetails}`,
    httpOptions
  );
}

TotalActiveUsers() {
  const token1 = this.token.getToken();
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token1
    })
  };
  return this.http.get(
    AUTH_API + 'Total_Activeusers',
    httpOptions
  );
}

TotalInactiveUsers() {
  const token1 = this.token.getToken();
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token1
    })
  };
  return this.http.get(
    AUTH_API + 'Total_Inactiveusers',
    httpOptions
  );
}

GetUserDataByid(id:any){
  const token1 = this.token.getToken();
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token1
    })
  }
  return this.http.get(
    AUTH_API + 'Get_Userdatabyregid/'+id,
    httpOptions
  );   
}

GetUserDataByregid(id:any){
  const token1 = this.token.getToken();
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token1
    })
  }
  return this.http.get(
    AUTH_API + 'Get_Userdatabyid/'+id,
    httpOptions
  );   
}

WithdrawUsers(){
    const token1 = this.token.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token1
      })
    }
    return this.http.get(
      AUTH_API + 'Withdraw_users',
      httpOptions
    );
  }

  WalletWithdrawPay(id:any){
  const token1 = this.token.getToken();
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token1
    })
  }
  return this.http.get(
    AUTH_API + 'Pay_withdrawreq/'+id,
    httpOptions
  );   
}

WalletWithdrawReject(id:any){
  const token1 = this.token.getToken();
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token1
    })
  }
  return this.http.get(
    AUTH_API + 'Reject_withdrawreq/'+id,
    httpOptions
  );   
}

GetWalletCompletedWithdraw(){
  const token1 = this.token.getToken();
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token1
    })
  }
  return this.http.get(
    AUTH_API + 'Withdraw_Paid',
    httpOptions
  );   
}

userblock(id:any){
  const token1 = this.token.getToken();
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token1
    })
  }
  return this.http.get(
    AUTH_API + 'Userprofile_Block/'+id,
    httpOptions
  );   
}

userunblock(id:any){
  const token1 = this.token.getToken();
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token1
    })
  }
  return this.http.get(
    AUTH_API + 'Userprofile_UnBlock/'+id,
    httpOptions
  );   
}

TodayUpgradesData(){
  const token1 = this.token.getToken();
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token1
    })
  }
  return this.http.get(
    AUTH_API + 'Today_Upgrades',
    httpOptions
  );   
}

TotalUpgradeData(){
  const token1 = this.token.getToken();
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token1
    })
  }
  return this.http.get(
    AUTH_API + 'Total_Upgrades',
    httpOptions
  );   
}

TransferWalletUser(value: {
  regid: string;
  amount: number;
  remark: string;
}){
  const token1 = this.token.getToken();
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token1
    })
  };
  return this.http.post(
    AUTH_API + 'Wallet_Transfer',
    { 
    "regid":value.regid, 
    "amount":value.amount, 
    "remark":value.remark, 
  },
     httpOptions 
  );
}

AdminWalletTransfer(){
  const token1 = this.token.getToken();
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token1
    })
  }
  return this.http.get(
    AUTH_API + 'Admin_WalletTranfer',
    httpOptions
  );   
}

//Users
SilverUsers(){
  const token1 = this.token.getToken();
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token1
    })
  }
  return this.http.get(
    AUTH_API + 'Get_Silvermem',
    httpOptions
  );   
}

GoldUsers(){
  const token1 = this.token.getToken();
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token1
    })
  }
  return this.http.get(
    AUTH_API + 'Get_Goldmem',
    httpOptions
  );   
}

DiamondUsers(){
  const token1 = this.token.getToken();
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token1
    })
  }
  return this.http.get(
    AUTH_API + 'Get_Diamondmem',
    httpOptions
  );   
}

//silver Ranks Users
SilverGm1(){
  const token1 = this.token.getToken();
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token1
    })
  }
  return this.http.get(
    AUTH_API + 'Get_Silvergmone',
    httpOptions
  );   
}

SilverGm2(){
  const token1 = this.token.getToken();
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token1
    })
  }
  return this.http.get(
    AUTH_API + 'Get_Silvergmtwo',
    httpOptions
  );   
}

SilverGm3(){
  const token1 = this.token.getToken();
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token1
    })
  }
  return this.http.get(
    AUTH_API + 'Get_Silvergmthree',
    httpOptions
  );   
}

SilverGm4(){
  const token1 = this.token.getToken();
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token1
    })
  }
  return this.http.get(
    AUTH_API + 'Get_Silvergmfour',
    httpOptions
  );   
}

SilverGm5(){
  const token1 = this.token.getToken();
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token1
    })
  }
  return this.http.get(
    AUTH_API + 'Get_Silvergmfive',
    httpOptions
  );   
}

SilverGm6(){
  const token1 = this.token.getToken();
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token1
    })
  }
  return this.http.get(
    AUTH_API + 'Get_Silvergmsix',
    httpOptions
  );   
}

SilverBm(){
  const token1 = this.token.getToken();
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token1
    })
  }
  return this.http.get(
    AUTH_API + 'Get_Silverbm',
    httpOptions
  );   
}

SilverDirector(){
  const token1 = this.token.getToken();
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token1
    })
  }
  return this.http.get(
    AUTH_API + 'Get_Silverdirector',
    httpOptions
  );   
}

//Gold Ranks Data
GoldGm1(){
  const token1 = this.token.getToken();
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token1
    })
  }
  return this.http.get(
    AUTH_API + 'Get_Goldgmone',
    httpOptions
  );   
}

GoldGm2(){
  const token1 = this.token.getToken();
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token1
    })
  }
  return this.http.get(
    AUTH_API + 'Get_Goldgmtwo',
    httpOptions
  );   
}

GoldGm3(){
  const token1 = this.token.getToken();
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token1
    })
  }
  return this.http.get(
    AUTH_API + 'Get_Goldgmthree',
    httpOptions
  );   
}

GoldGm4(){
  const token1 = this.token.getToken();
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token1
    })
  }
  return this.http.get(
    AUTH_API + 'Get_Goldgmfour',
    httpOptions
  );   
}

GoldGm5(){
  const token1 = this.token.getToken();
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token1
    })
  }
  return this.http.get(
    AUTH_API + 'Get_Goldgmfive',
    httpOptions
  );   
}

GoldGm6(){
  const token1 = this.token.getToken();
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token1
    })
  }
  return this.http.get(
    AUTH_API + 'Get_Goldgmsix',
    httpOptions
  );   
}

GoldBm(){
  const token1 = this.token.getToken();
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token1
    })
  }
  return this.http.get(
    AUTH_API + 'Get_Goldbm',
    httpOptions
  );   
}

GoldDirector(){
  const token1 = this.token.getToken();
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token1
    })
  }
  return this.http.get(
    AUTH_API + 'Get_Golddirector',
    httpOptions
  );   
}

//diamond Ranks
DiamondGm1(){
  const token1 = this.token.getToken();
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token1
    })
  }
  return this.http.get(
    AUTH_API + 'Get_Diamondgmone',
    httpOptions
  );   
}

DiamondGm2(){
  const token1 = this.token.getToken();
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token1
    })
  }
  return this.http.get(
    AUTH_API + 'Get_Diamondgmtwo',
    httpOptions
  );   
}

DiamondGm3(){
  const token1 = this.token.getToken();
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token1
    })
  }
  return this.http.get(
    AUTH_API + 'Get_Diamondgmthree',
    httpOptions
  );   
}

DiamondGm4(){
  const token1 = this.token.getToken();
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token1
    })
  }
  return this.http.get(
    AUTH_API + 'Get_Diamondgmfour',
    httpOptions
  );   
}

DiamondGm5(){
  const token1 = this.token.getToken();
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token1
    })
  }
  return this.http.get(
    AUTH_API + 'Get_Diamondgmfive',
    httpOptions
  );   
}

DiamondGm6(){
  const token1 = this.token.getToken();
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token1
    })
  }
  return this.http.get(
    AUTH_API + 'Get_Diamondgmsix',
    httpOptions
  );   
}

DiamondBm(){
  const token1 = this.token.getToken();
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token1
    })
  }
  return this.http.get(
    AUTH_API + 'Get_Diamondbm',
    httpOptions
  );   
}

DiamondDirector(){
  const token1 = this.token.getToken();
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token1
    })
  }
  return this.http.get(
    AUTH_API + 'Get_Diamonddirector',
    httpOptions
  );   
}


// getBanner(){
//   const token1 = this.token.getToken();
//   const httpOptions = {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json',
//       'Authorization': 'Bearer ' + token1
//     })
//   }
//   return this.http.get(
//     AUTH_API + 'Get_Banners',
//     httpOptions
//   );   
// }
// addBanner(value: any) {
//   const token1 = this.token.getToken();
//   const httpOptions = {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json',
//       'Authorization': 'Bearer ' + token1
//     })
//   };

//   return this.http.post(
//     AUTH_API + 'Add_Banners',
//     {
//       "sponcerid": value.sponcerid,
//       "bannertype":value.bannertype,
//       "name":value.name,
//       "desc":value.desc,
//       "image":value.image
//     },
//     httpOptions
//   );
// } 


// deleteBanner(){
//   const token1 = this.token.getToken();
//   const httpOptions = {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json',
//       'Authorization': 'Bearer ' + token1
//     })
//   }
//   return this.http.del(
//     AUTH_API + 'Deletebanner/$id',
//     httpOptions
//   );   
// }


// getBannerid (){
//   $type->bannertype
//   const token1 = this.token.getToken();
//   const httpOptions = {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json',
//       'Authorization': 'Bearer ' + token1
//     })
//   }
//   return this.http.del(
//     AUTH_API + 'Get_Bannersbytype/$type',
//     httpOptions
//   );   
// }
getBanner() {
  const token1 = this.token.getToken();
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token1
    })
  };
  return this.http.get(AUTH_API + 'Get_Banners', httpOptions);
}

addBanner(formData: FormData) {
  const token = this.token.getToken();

  const httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' + token
    })
  };

  return this.http.post(AUTH_API + 'Add_Banners', formData, httpOptions);
}


deleteBanner(id: any) {
  const token1 = this.token.getToken();

  const httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' + token1
    })
  };

  return this.http.get(
    `${AUTH_API}Deletebanner/${id}`,
    httpOptions
  );
}

getBannerByType(type: any) {
  const token1 = this.token.getToken();
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token1
    })
  };

  return this.http.get(AUTH_API + 'Get_Bannersbytype/' + type, httpOptions);
}


}
