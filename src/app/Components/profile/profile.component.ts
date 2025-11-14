import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profileForm!: FormGroup;
  profileData: any;
  showPass = false;
  saving = false;

  constructor(private fb: FormBuilder, private api: UserService) {}

  ngOnInit(): void {
    this.initForm();
    this.loadProfile();
  }

  initForm(): void {
    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      state: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      address: [''],

      // KYC
      aadharno: [''],
      panno: [''],

      // Bank
      payeename: [''],
      bankname: [''],
      branch: [''],
      ifsccode: [''],
      accountno: [''],

      // Nominee
      nname: [''],
      nrelation: [''],
      npanno: [''],
      naadhar: [''],
      nmobile: [''],
      nemail: [''],
      naccountno: [''],
      nbankname: [''],
      nbranch: [''],
      nifsccode: ['']
    });
  }

  togglePass() {
    this.showPass = !this.showPass;
  }

  loadProfile() {
    this.api.getProfile().subscribe({
      next: (res: any) => {
        if (res?.data?.length > 0) {
          this.profileData = res.data[0];

          this.profileForm.patchValue(this.profileData);
        }
      },
      error: err => console.error("Profile Load Error", err)
    });
  }

  onSave() {
    if (this.profileForm.invalid) {
      this.profileForm.markAllAsTouched();
      return;
    }

    if (!this.profileData?.id) {
      alert("Profile ID not found!");
      return;
    }

    this.saving = true;

    this.api.updateProfile(this.profileData.id, this.profileForm.value)
      .pipe(finalize(() => this.saving = false))
      .subscribe({
        next: () => alert("Profile updated successfully!"),
        error: err => {
          console.error("Update Error", err);
          alert("Profile update failed!");
        }
      });
  }
}
