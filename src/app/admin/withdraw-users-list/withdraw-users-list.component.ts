import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-withdraw-users-list',
  templateUrl: './withdraw-users-list.component.html',
  styleUrls: ['./withdraw-users-list.component.scss']
})
export class WithdrawUsersListComponent implements OnInit {
  filterStatus: string = 'pending'; // default filter
  withdrawUsers: any[] = [];
  loading = false;
  errorMsg = '';

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.loadWithdrawUsers();
  }

  onFilterChange(event: any) {
    this.filterStatus = event.target.value;
    this.withdrawUsers = [];
    this.errorMsg = '';
    this.loadWithdrawUsers();
  }

  loadWithdrawUsers() {
    this.loading = true;
    let apiCall;

    if (this.filterStatus === 'completed') {
      apiCall = this.adminService.GetWalletCompletedWithdraw();
    } else {
      apiCall = this.adminService.WithdrawUsers();
    }

    apiCall.subscribe({
      next: (res: any) => {
        this.loading = false;
        this.withdrawUsers = res.data || res || [];
        if (!this.withdrawUsers.length) this.errorMsg = 'No records found.';
      },
      error: (err) => {
        this.loading = false;
        this.errorMsg = 'Failed to load withdraw users.';
        console.error(err);
      }
    });
  }

  payWithdraw(id: any) {
    if (!confirm('Are you sure you want to pay this withdrawal?')) return;

    this.adminService.WalletWithdrawPay(id).subscribe({
      next: () => {
        alert('Withdrawal paid successfully.');
        this.loadWithdrawUsers();
      },
      error: (err) => {
        console.error(err);
        alert('Failed to pay withdrawal.');
      }
    });
  }

  rejectWithdraw(id: any) {
    if (!confirm('Are you sure you want to reject this withdrawal?')) return;

    this.adminService.WalletWithdrawReject(id).subscribe({
      next: () => {
        alert('Withdrawal rejected successfully.');
        this.loadWithdrawUsers();
      },
      error: (err) => {
        console.error(err);
        alert('Failed to reject withdrawal.');
      }
    });
  }
}
