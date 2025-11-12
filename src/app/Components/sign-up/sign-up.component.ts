import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';

declare var bootstrap: any;


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  registerForm!: FormGroup;
  sponsorName: string = '';
  packages: any[] = [];
  products: any[] = [];
  successData: any = null;
  loading = false;

  @ViewChild('successModal') successModal!: ElementRef; // 👈 modal reference

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      sponcerid: ['', Validators.required],
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      email: ['', [Validators.required, Validators.email]],
      package: ['', Validators.required],
      product: ['', Validators.required],
      password: ['', Validators.required],
      address: ['', Validators.required]
    });

    this.loadPackages();
  }

  loadPackages() {
    this.userService.GetpackagesData().subscribe({
      next: (res: any) => {
        this.packages = res;
      },
      error: (err) => console.error(err)
    });
  }

  onSponsorChange() {
    const id = this.registerForm.get('sponcerid')?.value;
    if (id) {
      this.userService.GetByUserid(id).subscribe({
        next: (res: any) => {
          this.sponsorName = res?.name || 'Not Found';
        },
        error: () => {
          this.sponsorName = 'Not Found';
        }
      });
    } else {
      this.sponsorName = '';
    }
  }

  onPackageSelect() {
    const id = this.registerForm.get('package')?.value;
    if (id) {
      this.userService.GetProductsByPackages(id).subscribe({
        next: (res: any) => {
          this.products = res;
        },
        error: (err) => console.error(err)
      });
    }
  }

  onSubmit() {
    if (this.registerForm.invalid) return;
    this.loading = true;

    this.userService.Register(this.registerForm.value).subscribe({
      next: (res: any) => {
        this.successData = res;
        this.loading = false;
        this.registerForm.reset();

        // 👇 Show Bootstrap Modal
        const modalEl = this.successModal.nativeElement;
        const modal = new bootstrap.Modal(modalEl);
        modal.show();
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      }
    });
  }
}
