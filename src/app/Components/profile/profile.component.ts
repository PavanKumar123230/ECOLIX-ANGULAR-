import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';
import { finalize } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  profileForm!: FormGroup;
  profileData: any;
  showPass = false;
  saving = false;

  // ⭐ Added For Image Upload
  previewImage: any = null;
  selectedImageFile: any = null;

  constructor(
    private fb: FormBuilder,
    private api: UserService,
    private toast: ToastrService
  ) {}

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
      image: [''],   // keep base64 image
      pincode: [''],
      aadharno: [''],
      panno: [''],
      payeename: [''],
      bankname: [''],
      branch: [''],
      ifsccode: [''],
      accountno: [''],
      nname: [''],
      nrelation: [''],
      npanno: [''],
      naadhar: [''],
      nmobile: [''],
      nemail: [''],
      ndob: [''],
      naccountno: [''],
      nbankname: [''],
      nbranch: [''],
      nifsccode: [''],
    });
  }

  togglePass() {
    this.showPass = !this.showPass;
  }

  // ⭐ Load Profile + Image Preview
  loadProfile() {
    this.api.getProfile().subscribe({
      next: (res: any) => {
        console.log("profile", res);

        if (res?.data?.length > 0) {
          this.profileData = res.data[0];
          this.profileForm.patchValue(this.profileData);

          // ⭐ If image exists in DB → show in preview
          if (this.profileData.image) {
            this.previewImage = this.profileData.image;
          }
        }
      },
      error: (err) => {
        console.error('Profile Load Error', err);
        this.toast.error('Failed to load profile!', 'Error');
      }
    });
  }

  onImageSelect(event: any) {
    const file = event.target.files[0];
    if (!file) return;
  
    this.selectedImageFile = file;
  
    // Show Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.previewImage = reader.result;
    };
    reader.readAsDataURL(file);
  
    // Save actual file in form
    this.profileForm.patchValue({
      image: file
    });
  }
  

  onSave() {
    console.log("🔥 BEFORE SAVE:", this.profileForm.value);
  
    this.api.updateProfile(this.profileData.id, this.profileForm.value)
      .pipe(finalize(() => this.saving = false))
      .subscribe({
        next: (res) => {
          console.log("✅ AFTER SAVE:", res);
          this.toast.success('Profile updated successfully!', 'Success');
        },
        error: (err) => {
          console.error('❌ Update Error', err);
          this.toast.error('Profile update failed!', 'Error');
        }
      });
  }
  

}
