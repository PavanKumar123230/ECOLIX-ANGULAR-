import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';
import { HttpHeaders } from '@angular/common/http';
import { TokenStorageService } from 'src/app/service/token-storage.service'; // ✅ Make sure you have this imported
import { Router } from '@angular/router';

@Component({
  selector: 'app-transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.scss'],
})
export class TransferFundComponent implements OnInit {
  transferForm: FormGroup;
  balance: number = 49812; // Example balance
  homeData: any;
  profiledata: any;
  successMessage: string = '';
  errorMessage: string = '';
transactions: any;
walletReports: any[] = [];

  constructor(
    private fb: FormBuilder,
    private api: UserService,
    private token: TokenStorageService,private router:Router
  ) {
    this.transferForm = this.fb.group({
      amount: [
        '',
        [
          Validators.required,
          Validators.min(50),
          Validators.pattern(/^[0-9]+(\.[0-9]{1,2})?$/),
        ],
      ],
      regid: ['', Validators.required],
      wallettype: ['mwallet'],
      remark: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.getHome();
this.getWalletReport();

  }

  getHome() {
    this.api.Home().subscribe({
      next: (res: any) => {
        console.log('Home API response:', res);
        this.homeData = res.data;
        this.profiledata = this.homeData?.profiledata;
      },
      error: (err) => {
        console.error('Error fetching home data:', err);
      },
    });
  }

  onTransfer() {
    if (this.transferForm.invalid) {
      this.transferForm.markAllAsTouched();
      return;
    }
    const formValue = this.transferForm.value;

    this.api.TransferWallet(formValue).subscribe({
      next: (res: any) => {
        console.log('Transfer Response:', res);
        this.successMessage = `✅ ₹${formValue.amount} successfully transferred to ${formValue.regid}!`;
        alert(this.successMessage); // 👈 or show Bootstrap modal
        this.balance -= formValue.amount;
        this.transferForm.reset();
        
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/transferfund']);
        });
      },
      error: (err) => {
        console.error('Transfer Error:', err);
        this.errorMessage = '❌ Transfer failed. Please try again.';
        alert(this.errorMessage);
      },
    });
  }




  getWalletReport() {
    this.api.WalletReport().subscribe({
      next: (res: any) => {
        console.log('Wallet Report:', res);
        if (res.status === 1 && Array.isArray(res.data)) {
          // Map the response fields into table-friendly format
          this.transactions = res.data.map((item: any) => ({
            date: `${item.cdate} ${item.ctime}`,
            userId: item.userid,
            amount: item.amount,
            type: item.type,
            walletType: item.waltype,
            remark: item.remark,
          }));
        } else {
          this.transactions = [];
        }
      },
      error: (err) => {
        console.error('Error fetching wallet report:', err);
        this.transactions = [];
      },
    });
  }
  

}
