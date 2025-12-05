import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/service/admin.service';
import { AuthService } from 'src/app/service/auth.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent {
  password = '';
  showPassword: boolean = false;
errorMessage='';
togglePasswordVisibility(): void {
  this.showPassword = !this.showPassword;
}
  form:FormGroup;
    isLoggedIn: boolean = false;
  constructor(private router:Router, private authService:AuthService, private tokenStorage:TokenStorageService,private toast:ToastrService) {
        this.form = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', [
        Validators.required,
        Validators.maxLength(50),
      ]),
    });
   }


  //  onSubmit(): void {
  //   const f = this.form.value;
  //   this.authService.login(f.username, f.password).subscribe(
  //     (res) => {
  //       this.tokenStorage.saveToken(res.token);
  //       this.tokenStorage.saveUser(res);
        
  //       console.log(res);
  //       this.reloadPage();
  //       setTimeout(() => {
  //         this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
  //           this.router.navigate(['/adashboard']);
  //         });
  //       }, 500);
  //     },
  //     (err) => {
  //       this.errorMessage = err.error.message;
  //       this.isLoggedIn = false;
  //     }
  //   );
  // }

  onSubmit(): void {
  const f = this.form.value;

  this.authService.login(f.username, f.password).subscribe(
    (res: any) => {
      this.tokenStorage.saveToken(res.token);
      this.tokenStorage.saveUser(res);

      // SUCCESS TOAST
      this.toast.success(res.message || 'Login successful!', 'Success');

      console.log(res);

      this.reloadPage();

      setTimeout(() => {
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/adashboard']);
        });
      }, 500);
    },
    (err) => {
      this.errorMessage = err.error.message || 'Login failed!';
      this.isLoggedIn = false;

      // ERROR TOAST
      this.toast.error(this.errorMessage, 'Error');
    }
  );
}

  
  reloadPage(): void {
    this.router.navigateByUrl('/adashboard');
  }
 

}
