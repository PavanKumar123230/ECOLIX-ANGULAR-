import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-wallet-report',
  templateUrl: './wallet-report.component.html',
  styleUrls: ['./wallet-report.component.scss']
})
export class WalletReportComponent implements OnInit {

  walletData: any[] = [];
  filteredUsers: any[] = [];

  fromDate: string = '';
  toDate: string = '';
  selectedPaytype: string = '';

  pageTotalAmount: number = 0;
  loading = false;

  currentPage: number = 1;
pageSize: number = 20; // 20 records per page
totalPages: number = 0;
paginatedUsers: any[] = [];


  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.getWalletReport();
  }

  getWalletReport(): void {
    this.loading = true;
    this.adminService.WalletReport().subscribe({
      next: (res: any) => {
        console.log(res)
        this.walletData = Array.isArray(res?.data) ? res.data : [];
        this.applyFilters();
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  // applyFilters(): void {

  //   // 1️⃣ First: keep ONLY level method records
  //   let data = this.walletData.filter((u: any) => u.method === 'level');
  
  //   // 2️⃣ Paytype filter (join / silver / gold / diamond)
  //   if (this.selectedPaytype) {
  //     data = data.filter(
  //       (u: any) => u.paytype === this.selectedPaytype
  //     );
  //   }
  
  //   // 3️⃣ Date filter (cdate)
  //   if (this.fromDate) {
  //     data = data.filter(
  //       (u: any) => u.cdate >= this.fromDate
  //     );
  //   }
  
  //   if (this.toDate) {
  //     data = data.filter(
  //       (u: any) => u.cdate <= this.toDate
  //     );
  //   }
  
  //   // 4️⃣ Final result
  //   this.filteredUsers = data;
  
  //   // 5️⃣ Total amount
  //   this.totalAmount = this.filteredUsers.reduce(
  //     (sum, r) => sum + (+r.amount || 0),
  //     0
  //   );
  // }


  applyFilters(): void {
    let data = this.walletData.filter((u: any) => u.method === 'level');
  
    if (this.selectedPaytype) {
      data = data.filter(u => u.paytype === this.selectedPaytype);
    }
  
    if (this.fromDate) {
      data = data.filter(u => u.cdate >= this.fromDate);
    }
  
    if (this.toDate) {
      data = data.filter(u => u.cdate <= this.toDate);
    }
  
    this.filteredUsers = data;
  
    // Optional: overall total (not shown in table footer)
    this.pageTotalAmount = this.filteredUsers.reduce(
      (sum, r) => sum + (+r.amount || 0),
      0
    );
  
    this.totalPages = Math.ceil(this.filteredUsers.length / this.pageSize);
    this.currentPage = 1;
  
    this.updatePaginatedUsers();
  }
  

  // applyFilters(): void {

  //   // 1️⃣ Only LEVEL method
  //   let data = this.walletData.filter((u: any) => u.method === 'level');
  
  //   // 2️⃣ Paytype filter
  //   if (this.selectedPaytype) {
  //     data = data.filter(u => u.paytype === this.selectedPaytype);
  //   }
  
  //   // 3️⃣ Date filter
  //   if (this.fromDate) {
  //     data = data.filter(u => u.cdate >= this.fromDate);
  //   }
  
  //   if (this.toDate) {
  //     data = data.filter(u => u.cdate <= this.toDate);
  //   }
  
  //   // 4️⃣ Save filtered users
  //   this.filteredUsers = data;
  
  //   // 5️⃣ Total amount
  //   this.totalAmount = this.filteredUsers.reduce(
  //     (sum, r) => sum + (+r.amount || 0),
  //     0
  //   );
  
  //   // 6️⃣ Calculate pagination
  //   this.totalPages = Math.ceil(this.filteredUsers.length / this.pageSize);
  //   this.currentPage = 1; // Reset to first page
  //   this.updatePaginatedUsers();
  // }
  // updatePaginatedUsers(): void {
  //   const startIndex = (this.currentPage - 1) * this.pageSize;
  //   const endIndex = startIndex + this.pageSize;
  //   this.paginatedUsers = this.filteredUsers.slice(startIndex, endIndex);
  // }

  updatePaginatedUsers(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
  
    this.paginatedUsers = this.filteredUsers.slice(startIndex, endIndex);
  
    // ✅ PAGE-WISE TOTAL
    this.pageTotalAmount = this.paginatedUsers.reduce(
      (sum, r) => sum + (+r.amount || 0),
      0
    );
  }
  
  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePaginatedUsers();
    }
  }
  
  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePaginatedUsers();
    }
  }
  
  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePaginatedUsers();
    }
  }
  
  
}
