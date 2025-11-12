import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

declare var bootstrap: any; // for Bootstrap JS modal

@Component({
  selector: 'app-admin-register-user',
  templateUrl: './admin-register-user.component.html',
  styleUrls: ['./admin-register-user.component.scss']
})
export class AdminRegisterUserComponent implements OnInit {

  registerForm: FormGroup;
  packages: any[] = [];
  products: any[] = [];
  loadingPackages = false;
  loadingProducts = false;
  submitting = false;
  errorMessage = '';
  userName: string = '';
  registeredUser: any = null; // store data to display in modal
  udata: any;

  constructor(private api: AdminService, private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      sponcerid: ['', Validators.required],
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      package: ['', Validators.required],
      product: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.getJoiningPackages();
  }

  getJoiningPackages() {
    this.loadingPackages = true;
    this.api.GetJoiningPackage().subscribe({
      next: (res: any) => {
        this.packages = res.data || [];
        this.loadingPackages = false;
      },
      error: () => (this.loadingPackages = false)
    });
  }

  onRegIdChange(event: any) {
    const id = event.target.value.trim();
    if (id.length > 3) {
      this.api.GetUserDataByid(id).subscribe({
        next: (res: any) => {
          this.userName = res?.data?.[0]?.name || 'Unknown User';
        },
        error: () => this.userName = 'User not found'
      });
    } else {
      this.userName = '';
    }
  }

  onPackageChange(event: any) {
    const packageId = event.target.value;
    if (!packageId) return;

    this.products = [];
    this.loadingProducts = true;
    this.registerForm.patchValue({ product: '' });

    this.api.GetProductsByPackages(packageId).subscribe({
      next: (res: any) => {
        console.log(res);
        
        this.products = res.data || [];
        this.loadingProducts = false;
      },
      error: () => this.loadingProducts = false
    });
  }

  submitForm() {
    if (this.registerForm.invalid) {
      this.errorMessage = 'Please fill all required fields';
      return;
    }

    this.submitting = true;
    this.errorMessage = '';

    this.api.AdminRegistration(this.registerForm.value).subscribe({
      next: (res: any) => {
        this.udata=res.data;
        console.log('userdata',res);
        
        // Save registered user data to display in modal
        this.registeredUser = {
          regid: res?.data?.regid || 'N/A',
          name: this.registerForm.value.name,
          phone: this.registerForm.value.phone,
          sponcerid: this.registerForm.value.sponcerid,
          password: this.registerForm.value.password
        };

        // Open Bootstrap modal
        const modalEl = document.getElementById('userModal');
        const modal = new bootstrap.Modal(modalEl);
        modal.show();

        this.registerForm.reset();
        this.products = [];
        this.submitting = false;
      },
      error: err => {
        this.errorMessage = err?.error?.message || 'Something went wrong';
        this.submitting = false;
      }
    });
  }
}
