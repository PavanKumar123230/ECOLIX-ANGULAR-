import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-transfer-walletto-user',
  templateUrl: './transfer-walletto-user.component.html',
  styleUrls: ['./transfer-walletto-user.component.scss']
})
export class TransferWallettoUserComponent implements OnInit {
  transferForm!: FormGroup;
  userName: string = '';
  loading = false;
  successMsg = '';
  errorMsg = '';
  walletTransfers: any[] = [];

  constructor(
    private fb: FormBuilder,
    private adminService: AdminService
  ) {}

  ngOnInit(): void {
    this.transferForm = this.fb.group({
      regid: ['', Validators.required],
      amount: ['', [Validators.required, Validators.min(1)]],
      remark: ['', Validators.required]
    });
    this.loadTransferHistory();
  }

  onRegIdChange(event: any) {
    const id = event.target.value.trim();
    if (id.length > 3) {
      this.adminService.GetUserDataByid(id).subscribe({
        next: (res: any) => {
          if (res && res.data && res.data.length > 0) {
            this.userName = res.data[0].name || 'Unknown User';
          } else {
            this.userName = 'User not found';
          }
        },
        error: () => (this.userName = 'User not found')
      });
    } else {
      this.userName = '';
    }
  }

  onSubmit() {
    if (this.transferForm.invalid) return;
    this.loading = true;
    this.successMsg = '';
    this.errorMsg = '';

    this.adminService.TransferWalletUser(this.transferForm.value).subscribe({
      next: (res: any) => {
        this.loading = false;
        this.successMsg = 'Fund transferred successfully!';
        this.transferForm.reset();
        this.loadTransferHistory();
      },
      error: (err) => {
        this.loading = false;
        this.errorMsg = 'Transfer failed. Please try again.';
      }
    });
  }

  loadTransferHistory() {
    this.adminService.AdminWalletTransfer().subscribe({
      next: (res: any) => {
        this.walletTransfers = res.data || [];
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
