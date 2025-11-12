import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileForm!: FormGroup;
  profileData: any;

  constructor(private api: UserService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
    this.getProfile();
  }

  initForm(): void {
    this.profileForm = this.fb.group({
      name: [''],
      email: [''],
      phone: [''],
      password: [''],
      accountno: [''],
      bankname: [''],
      ifsccode: ['']
    });
  }

  getProfile(): void {
    this.api.getProfile().subscribe({
      next: (res: any) => {
        if (res && res.data && res.data.length > 0) {
          this.profileData = res.data[0];
          this.profileForm.patchValue({
            name: this.profileData.name,
            email: this.profileData.email,
            phone: this.profileData.phone,
            password: this.profileData.password,
            accountno: this.profileData.accountno,
            bankname: this.profileData.bankname,
            ifsccode: this.profileData.ifsccode
          });
        }
        console.log('Profile Data:', this.profileData);
      },
      error: (err) => {
        console.error('Error fetching profile:', err);
      }
    });
  }

  onSave(): void {
    if (!this.profileData || !this.profileData.id) {
      console.error('No profile ID found!');
      return;
    }

    const updatedData = this.profileForm.value;
    console.log('Updated Profile:', updatedData);

    this.api.updateProfile(this.profileData.id, updatedData).subscribe({
      next: (res: any) => {
        console.log('Profile Updated Successfully:', res);
        alert('Profile updated successfully!');
      },
      error: (err) => {
        console.error('Error updating profile:', err);
        alert('Error updating profile. Please try again.');
      }
    });
  }
}
