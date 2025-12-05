import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service'; 
import { TokenStorageService } from 'src/app/service/token-storage.service'; 
import { UserService } from 'src/app/service/user.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    password = '';
 
    form:FormGroup;
   isLoggedIn: boolean = false;
  
   prodata: any;
   responsiveOptions: any[] | undefined;
  
  showPassword: boolean = false;
  errorMessage='';
  togglePasswordVisibility(): void {
   this.showPassword = !this.showPassword;
  }
  
  onUserIdInput(event: any) {
   // Convert to uppercase and remove all spaces
   const value = event.target.value.toUpperCase().replace(/\s+/g, '');
   event.target.value = value;
   this.form.get('regid')?.setValue(value, { emitEvent: false });
  }
  
     constructor(private router: Router, private fb:FormBuilder, private authService: AuthService,
       private tokenStorage: TokenStorageService, private uapi:UserService,private toast:ToastrService) {
       this.form = new FormGroup({
         regid: new FormControl('', [Validators.required]),
         password: new FormControl('', [
           Validators.required,
           Validators.maxLength(50),
         ]),
       });
      
     }
  
     ngOnInit(): void {
        
     }
  
    
    //  onSubmit(): void {
    //    const f = this.form.value;
    //    this.authService.ulogin(f.regid, f.password).subscribe((res:any) => {
    //        this.tokenStorage.saveToken(res.token);
    //        this.tokenStorage.saveUser(res);
    //         // this.toast.success('Login successful!');
    //         this.toast.success(res, 'Success');
    //        console.log(res);
    //        this.reloadPage();
    //        // this.router.navigate(['/dashboard']);
    //        // this.router.navigateByUrl('/dashboard');
    //      },
    //      (err) => {
    //        this.errorMessage = err.error.message || 'Login failed. Please try again.';
    //        this.isLoggedIn = false;
    //        this.toast.error(this.errorMessage, 'Error');
    //      }
    //    );
    //  }
    onSubmit(): void {
      const f = this.form.value;
      this.authService.ulogin(f.regid, f.password).subscribe(
        (res: any) => {
          this.tokenStorage.saveToken(res.token);
          this.tokenStorage.saveUser(res);
    
          // Show success message
          this.toast.success(res.message || 'Login successful!', 'Success');
    
          console.log(res);
          this.reloadPage();
        },
        (err) => {
          this.errorMessage = err.error.message || 'Login failed. Please try again.';
          this.isLoggedIn = false;
    
          this.toast.error(this.errorMessage, 'Error');
        }
      );
    }
    
  
     reloadPage(): void {
       this.router.navigateByUrl('/dashboard');
     }}






  

