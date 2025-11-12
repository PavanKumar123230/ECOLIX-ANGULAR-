import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.scss']
})
export class AdminProfileComponent implements OnInit {
  profileForm: FormGroup;
  loading = false;
  successMsg = '';
  errorMsg = '';
  userId: any;

  constructor(private fb: FormBuilder, private adminService: AdminService) {
    this.profileForm = this.fb.group({
      name: ['', ],
      phone: ['', ],
      email: ['', ],
      password: ['', ]
    });
  }

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile() {
    this.loading = true;
    this.adminService.Profile().subscribe({
      next: (res: any) => {
        const data = res.data;
        this.userId = data.id; // assuming response contains `id`
        this.profileForm.patchValue({
          name: data.name,
          phone: data.phone,
          email: data.email,
          password: '' // do not prefill password for security
        });
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.errorMsg = 'Failed to load profile.';
        this.loading = false;
      }
    });
  }

  onSubmit() {
    if (this.profileForm.invalid) return;

    this.loading = true;
    this.successMsg = '';
    this.errorMsg = '';

    const value = this.profileForm.value;

    this.adminService.UpdateUserProfile(this.userId, value).subscribe({
      next: (res) => {
        this.successMsg = 'Profile updated successfully!';
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.errorMsg = 'Failed to update profile.';
        this.loading = false;
      }
    });
  }

  resetForm() {
    this.getProfile();
    this.successMsg = '';
    this.errorMsg = '';
  }
}
