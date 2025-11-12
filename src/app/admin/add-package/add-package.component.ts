import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-add-package',
  templateUrl: './add-package.component.html',
  styleUrls: ['./add-package.component.scss']
})
export class AddPackageComponent implements OnInit {
  packageForm: FormGroup;
  packages: any[] = [];
  editMode = false;
  editId: any = null;
  loading = false;

  constructor(private fb: FormBuilder, private adminService: AdminService) {
    this.packageForm = this.fb.group({
      pname: ['', Validators.required],
      ptype: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadPackages();
  }

  // ✅ Load all packages
  loadPackages() {
    this.loading = true;
    this.adminService.GetPackages().subscribe({
      next: (res: any) => {
        console.log('Packages:', res);
        this.packages = res.data || res; // depends on your backend response
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      }
    });
  }

  // ✅ Submit form (Add / Update)
  onSubmit() {
    if (this.packageForm.invalid) return;
    const value = this.packageForm.value;

    if (this.editMode && this.editId) {
      // ---- Update package ----
      this.adminService.UpdatePackage(this.editId, value).subscribe({
        next: () => {
          alert('✅ Package updated successfully!');
          this.resetForm();
          this.loadPackages();
        },
        error: (err) => console.error(err)
      });
    } else {
      // ---- Add new package ----
      this.adminService.AddPackage(value).subscribe({
        next: () => {
          alert('✅ Package added successfully!');
          this.resetForm();
          this.loadPackages();
        },
        error: (err) => console.error(err)
      });
    }
  }

  // ✅ Edit package (load data to form)
  editPackage(id: any) {
    this.adminService.GetPackageByid(id).subscribe({
      next: (res: any) => {
        console.log('Editing package:', res);
        const data = res.data || res;
        this.packageForm.patchValue({
          pname: data.pname,
          ptype: data.ptype
        });
        this.editMode = true;
        this.editId = id;
      },
      error: (err) => console.error(err)
    });
  }

  // ✅ Reset form
  resetForm() {
    this.packageForm.reset();
    this.editMode = false;
    this.editId = null;
  }
}
