import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  bannerForm!: FormGroup;
  banners: any[] = [];
  preview: any = '';
  selectedFile!: File;

  constructor(private fb: FormBuilder, private api: AdminService) {}

  ngOnInit(): void {
    this.bannerForm = this.fb.group({
      bannertype: ['home'],
      // sponcerid: [''],
      // bannertype: [''],
      name: [''],
      desc: ['home banner']
    });

    this.loadBanners();
  }

  /** FILE SELECT */
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];

    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        this.preview = reader.result;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  /** ADD BANNER */
  addBanner() {
    if (!this.selectedFile) {
      alert("Please upload an image!");
      return;
    }

    const formData = new FormData();
    // formData.append("sponcerid", this.bannerForm.value.sponcerid);
    formData.append("bannertype", this.bannerForm.value.bannertype);
    // formData.append("bannertype", this.bannerForm.value.bannertype);
    formData.append("name", this.bannerForm.value.name);
    formData.append("desc", this.bannerForm.value.desc);
    formData.append("image", this.selectedFile);  // REQUIRED: File

    this.api.addBanner(formData).subscribe((res: any) => {
      alert("Banner Added Successfully!");
      this.bannerForm.reset();
      this.preview = '';
      this.loadBanners();
    });
  }

  /** LOAD ALL BANNERS */
  loadBanners() {
    this.api.getBanner().subscribe((res: any) => {
      console.log("banners:",res);
      
      this.banners = res?.data ?? res;
    });
  }

  /** DELETE */
  deleteBanner(id: string) {
    console.log("id",id);
    
    if (confirm("Are you sure?")) {
      this.api.deleteBanner(id).subscribe(() => {
        alert("Banner Deleted!");
        this.loadBanners();
      });
    }
  }
  
}
