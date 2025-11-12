import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss'],
})
export class WalletComponent implements OnInit {
  withdrawForm!: FormGroup;

  constructor(private fb: FormBuilder, private api: UserService) {}

  ngOnInit(): void {
    this.withdrawrequestpending();
    this.withdrawComplate();

    this.withdrawForm = this.fb.group({
      amount: ['', Validators.required],
      waltype: ['', Validators.required],
      accountnumber: [''],
      ifsc: [''],
    });
  }

  onWithdraw() {
    if (this.withdrawForm.invalid) {
      this.withdrawForm.markAllAsTouched();
      return;
    }

    const payload = this.withdrawForm.value;
    console.log('Withdraw Request:', payload);

    this.api.WithdrawRequest(payload).subscribe({
      next: (res: any) => {
        console.log('Withdraw Success:', res);
        alert('Withdraw request submitted successfully!');
        this.withdrawForm.reset();
      },
      error: (err) => {
        console.error('Withdraw Error:', err);
      },
    });
  }

  withdrawrequestpending() {
    this.api.Withdrawrequestdata().subscribe({
      next: (res: any) => {
        console.log('withdrawpending:', res);
      },
      error: (err) => {
        console.error('Error fetching home data:', err);
      },
    });
  }

  withdrawComplate() {
    this.api.Withdrawcomplate().subscribe({
      next: (res: any) => {
        console.log('withdcomplate:', res);
      },
      error: (err) => {
        console.error('Error fetching home data:', err);
      },
    });
  }
}
