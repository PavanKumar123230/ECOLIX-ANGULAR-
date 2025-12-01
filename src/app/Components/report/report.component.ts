import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {




 

  walletData: any[] = [];
  loading = false;
  errorMessage = '';

  constructor(private api: UserService) {}

  ngOnInit(): void {
    this.WalletReportdata();
  }

  WalletReportdata() {
    this.loading = true;
    this.api.Wallet().subscribe({
      next: (res: any) => {
        console.log('wReport:', res);
        this.loading = false;

        if (res.status === 1 && Array.isArray(res.data)) {
          // Transform API response for display
          this.walletData = res.data;
        } else {
          this.walletData = [];
          this.errorMessage = 'No wallet data found.';
        }
      },
      error: (err) => {
        this.loading = false;
        this.errorMessage = 'Error fetching wallet report.';
        console.error('Error fetching wallet data:', err);
      },
    });
  }
}

