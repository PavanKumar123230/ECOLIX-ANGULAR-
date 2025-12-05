import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-select-packages',
  templateUrl: './select-packages.component.html',
  styleUrls: ['./select-packages.component.scss']
})
export class SelectPackagesComponent implements OnInit {
  selectedPackage: string = '';
  selectedProduct: any = null;
  data1: any[] = []; // Packages list
  productdata: any[] = []; // Products for selected package
  registerForm!: FormGroup;

  constructor(private api: UserService, private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      sponcerid: ['', Validators.required],
      name: ['', [Validators.required, Validators.minLength(3)]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      email: ['', [Validators.required, Validators.email]],
      package: ['', Validators.required],
      product: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      address: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.getPackages();
  }

  selectPackage(pkg: any) {
    this.selectedPackage = pkg.id;
    this.onPackageSelect();
  }
  

  /** Fetch all packages */
  getPackages() {
    this.api.GetpackagesData().subscribe({
      next: (res: any) => {
        this.data1 = res.data || [];
        console.log('Packages:', this.data1);
  
        // ⭐ Auto select first package
        if (this.data1.length > 0) {
          this.selectedPackage = this.data1[0].id;
          this.onPackageSelect(); // Load products
        }
      },
      error: (err) => {
        console.error('Error fetching packages', err);
      }
    });
  }
  
  /** When user selects a package, fetch its products */
  onPackageSelect() {
    if (this.selectedPackage) {
      this.api.GetProductsByPackages(this.selectedPackage).subscribe({
        next: (res: any) => {
          this.productdata = res.data || [];
          console.log('Products for package', this.productdata);
        },
        error: (err) => {
          console.error('Error fetching products', err);
        }
      });
    }
  }



  openProductModal(product: any) {
    this.selectedProduct = product;
    console.log("Selected Product:", this.selectedProduct);
  
    const modal = document.getElementById('productModal');
    if (modal) {
      modal.classList.add('show');
      (modal as any).style.display = 'block';
    }
  
    // Autofill hidden fields for API
    this.registerForm.patchValue({
      package: product.package,
      product: product.id
    });
  }
  

  /** Close modal */
  closeModal() {
    const modal = document.getElementById('productModal');
    if (modal) {
      modal.classList.remove('show');
      (modal as any).style.display = 'none';
    }
  }
/** Submit Registration */
successData: any = null; // for storing registration response

RegisterPackages() {
  if (this.registerForm.invalid) {
    this.registerForm.markAllAsTouched();
    return;
  }

  const formValue = this.registerForm.value;
  const payload = {
    sponcerid: formValue.sponcerid,
    name: formValue.name,
    phone: formValue.phone,
    email: formValue.email,
    package: this.selectedProduct?.package || formValue.package,
    product: this.selectedProduct?.id || formValue.product,
    password: formValue.password,
    address: formValue.address
  };

  console.log("Registration Payload:", payload);

  this.api.Register(payload).subscribe({
    next: (res: any) => {
      console.log('Registration Successful:', res);

      if (res.status === 1) {
        this.successData = res.data; // store response data

        // Close product modal
        this.closeModal();

        // Open success modal
        const modal = document.getElementById('successModal');
        if (modal) {
          modal.classList.add('show');
          (modal as any).style.display = 'block';
        }

        this.registerForm.reset();
      } else {
        alert(res.message || 'Registration failed.');
      }
    },
    error: (err) => {
      console.error('❌ Error during registration:', err);
      alert('Registration failed. Please try again.');
    }
  });
}

/** Close success modal */
closeSuccessModal() {
  const modal = document.getElementById('successModal');
  if (modal) {
    modal.classList.remove('show');
    (modal as any).style.display = 'none';
  }
}

}
