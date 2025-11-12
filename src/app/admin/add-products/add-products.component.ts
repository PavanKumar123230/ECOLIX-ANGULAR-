import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.scss']
})
export class AddProductsComponent implements OnInit {
  productForm: FormGroup;
  products: any[] = [];
  editMode = false;
  editId: any = null;
  loading = false;
  packages: any;

  constructor(private fb: FormBuilder, private adminService: AdminService) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      amount: ['', [Validators.required, Validators.min(1)]],
      package: ['', Validators.required],
      gst: ['', [Validators.required, Validators.min(0)]],
      content: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadProducts();
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

  // ✅ Load all products
  loadProducts() {
    this.loading = true;
    this.adminService.GetProducts().subscribe({
      next: (res: any) => {
        console.log('Products:', res);
        this.products = res.data || res;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      }
    });
  }

  // ✅ Submit form (Add or Update)
  onSubmit() {
    if (this.productForm.invalid) return;
    const value = this.productForm.value;

    if (this.editMode && this.editId) {
      // ---- Update Product ----
      this.adminService.UpdateUserProduct(this.editId, value).subscribe({
        next: () => {
          alert('✅ Product updated successfully!');
          this.resetForm();
          this.loadProducts();
        },
        error: (err) => console.error(err)
      });
    } else {
      // ---- Add Product ----
      this.adminService.AddProducts(value).subscribe({
        next: () => {
          alert('✅ Product added successfully!');
          this.resetForm();
          this.loadProducts();
        },
        error: (err) => console.error(err)
      });
    }
  }

  // ✅ Edit Product
  editProduct(id: any) {
    this.adminService.GetProductByid(id).subscribe({
      next: (res: any) => {
        console.log('Edit product:', res);
        const data = res.data || res;
        this.productForm.patchValue({
          name: data.name,
          amount: data.amount,
          package: data.package,
          gst: data.gst,
          content: data.content
        });
        this.editMode = true;
        this.editId = id;
      },
      error: (err) => console.error(err)
    });
  }

  // ✅ Reset form
  resetForm() {
    this.productForm.reset();
    this.editMode = false;
    this.editId = null;
  }
}
