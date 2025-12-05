// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { AdminService } from 'src/app/service/admin.service';
// @Component({
//   selector: 'app-admin-profile',
//   templateUrl: './admin-profile.component.html',
//   styleUrls: ['./admin-profile.component.scss']
// })
// export class AdminProfileComponent implements OnInit {
//   profileForm: FormGroup;
//   loading = false;
//   successMsg = '';
//   errorMsg = '';
//   userId: any;
//   constructor(private fb: FormBuilder, private adminService: AdminService) {
//     this.profileForm = this.fb.group({
//       name: ['', ],
//       phone: ['', ],
//       email: ['', ],
//       password: ['', ]
//     });
//   }

//   ngOnInit(): void {
//     this.getProfile();
//   }
//   getProfile() {
//     this.loading = true;
//     this.adminService.Profile().subscribe({
//       next: (res: any) => {
//         const data = res.data;
//         this.userId = data.id; // assuming response contains `id`
//         this.profileForm.patchValue({
//           name: data.name,
//           phone: data.phone,
//           email: data.email,
//           password: '' // do not prefill password for security
//         });
//         this.loading = false;
//       },
//       error: (err) => {
//         console.error(err);
//         this.errorMsg = 'Failed to load profile.';
//         this.loading = false;
//       }
//     });
//   }
//   onSubmit() {
//     if (this.profileForm.invalid) return;
//     this.loading = true;
//     this.successMsg = '';
//     this.errorMsg = '';
//     const value = this.profileForm.value;
//     this.adminService.UpdateUserProfile(this.userId, value).subscribe({
//       next: (res) => {
//         this.successMsg = 'Profile updated successfully!';
//         this.loading = false;
//       },
//       error: (err) => {
//         console.error(err);
//         this.errorMsg = 'Failed to update profile.';
//         this.loading = false;
//       }
//     });
//   }
//   resetForm() {
//     this.getProfile();
//     this.successMsg = '';
//     this.errorMsg = '';
//   }
// }


import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.scss']
})
export class AdminProfileComponent implements OnInit {

  profileForm: FormGroup;
  loading = false;
  saving = false;
  successMsg = '';
  errorMsg = '';
  userId: any;
  showPass = false;

  constructor(
    private fb: FormBuilder,
    private adminService: AdminService,
    private toast: ToastrService
  ) {
    this.profileForm = this.fb.group({
      user: [''],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['']
    });
  }

  ngOnInit(): void {
    this.getProfile();
  }

  togglePass() {
    this.showPass = !this.showPass;
  }

  getProfile() {
    this.loading = true;
    this.adminService.Profile().subscribe({
      next: (res: any) => {
        const data = res.data;
        console.log(res)
        this.userId = data.id;

        this.profileForm.patchValue({
          user: data.user,
          phone: data.phone,
          email: data.email,
          password: data.password
        });

        this.loading = false;
      },
      error: () => {
        this.toast.error('Failed to load profile', 'Error');
        this.loading = false;
      }
    });
  }

  onSubmit() {
    if (this.profileForm.invalid) return;
  
    this.saving = true;
    this.successMsg = '';
    this.errorMsg = '';
  
    const value = this.profileForm.value;
  
    // 👉 Console form before API call
    console.log('Form Submitted:', value);
  
    this.adminService.UpdateUserProfile(this.userId, value).subscribe({
      next: () => {
        this.toast.success('Profile updated successfully!', 'Success');
        this.saving = false;
  
        // 👉 Console after success
        console.log('Updated Profile Data:', value);
      },
      error: () => {
        this.toast.error('Failed to update profile', 'Error');
        this.saving = false;
      }
    });
  }
  
}


