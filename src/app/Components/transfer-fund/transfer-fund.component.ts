import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.scss']
})
export class TransferFundComponent {
  transferForm: FormGroup;
  balance: number = 49812; // Balance in INR
  transactions: any[] = [];

  constructor(private fb: FormBuilder) {
    this.transferForm = this.fb.group({
      amount: [
        '',
        [
          Validators.required,
          Validators.min(500), // Minimum ₹5
          Validators.pattern(/^[0-9]+(\.[0-9]{1,2})?$/)
        ]
      ],
      userId: ['', Validators.required],
      pin: ['', [Validators.required, Validators.pattern(/^[0-9]{4}$/)]],
    });
  }

  onTransfer() {
    if (this.transferForm.valid) {
      const { amount, userId } = this.transferForm.value;

      this.transactions.unshift({
        sno: this.transactions.length + 1,
        date: new Date().toLocaleString(),
        userId,
        amount
      });

      alert(`✅ ₹${amount} transferred to ${userId} successfully!`);
      this.balance -= amount;
      this.transferForm.reset();
    }
  }
}
