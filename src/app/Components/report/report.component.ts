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

  itemsPerPage = 10;  // ✅ Show 10 records per page
  currentPage = 1;    // ✅ Default page

  constructor(private api: UserService) {}

  ngOnInit(): void {
    this.WalletReportdata();
  }

  WalletReportdata() {
    this.loading = true;
    this.api.Wallet().subscribe({
      next: (res: any) => {
        this.loading = false;

        if (res.status === 1 && Array.isArray(res.data)) {
          this.walletData = res.data;
        } else {
          this.walletData = [];
          this.errorMessage = 'No wallet data found.';
        }
      },
      error: () => {
        this.loading = false;
        this.errorMessage = 'Error fetching wallet report.';
      }
    });
  }

  get paginatedData() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.walletData.slice(start, start + this.itemsPerPage);
  }

  get totalPages() {
    return Math.ceil(this.walletData.length / this.itemsPerPage);
  }
  
  convertToAmPm(time: string): string {
    const [hour, minute] = time.split(':').map(Number);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const formattedHour = hour % 12 || 12;
    return `${formattedHour}:${minute.toString().padStart(2, '0')} ${ampm}`;
  }
  
}
