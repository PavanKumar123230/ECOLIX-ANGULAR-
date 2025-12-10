// import { Component, OnInit } from '@angular/core';
// import { AdminService } from 'src/app/service/admin.service';

// @Component({
//   selector: 'app-rank-users-data',
//   templateUrl: './rank-users-data.component.html',
//   styleUrls: ['./rank-users-data.component.scss']
// })
// export class RankUsersDataComponent implements OnInit {
//   selectedRank: string = '';
//   loading = false;
//   users: any[] = [];
//   errorMsg = '';

//   constructor(private adminService: AdminService) {}

//   ngOnInit(): void {}

//   onRankChange(event: any) {
//     const rank = event.target.value;
//     this.selectedRank = rank;
//     this.users = [];
//     this.errorMsg = '';
//     if (rank) this.loadUsers(rank);
//   }

//   loadUsers(rank: string) {
//     this.loading = true;
//     let apiCall;

//     if (rank === 'silver') apiCall = this.adminService.SilverUsers();
//     else if (rank === 'gold') apiCall = this.adminService.GoldUsers();
//     else if (rank === 'diamond') apiCall = this.adminService.DiamondUsers();
//     else return;

//     apiCall.subscribe({
//       next: (res: any) => {
//         this.loading = false;
//         this.users = res.data || res || [];
//         if (!this.users.length) this.errorMsg = 'No users found.';
//       },
//       error: (err) => {
//         this.loading = false;
//         this.errorMsg = 'Failed to fetch users.';
//       }
//     });
//   }

//   togglePassword(user: any) {
//     user.showPassword = !user.showPassword;
//   }
  
// }



import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-rank-users-data',
  templateUrl: './rank-users-data.component.html',
  styleUrls: ['./rank-users-data.component.scss']
})
export class RankUsersDataComponent implements OnInit {

  selectedRank: string = '';
  fromDate: string = '';
  toDate: string = '';

  loading = false;
  users: any[] = [];
  filteredUsers: any[] = [];
  errorMsg = '';

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {}

  // When rank is selected
  onRankChange(event: any) {
    const rank = event.target.value;
    this.selectedRank = rank;

    this.users = [];
    this.filteredUsers = [];
    this.errorMsg = '';

    if (rank) this.loadUsers(rank);
  }

  // Load based on rank only (API)
  loadUsers(rank: string) {
    this.loading = true;

    let apiCall;

    if (rank === 'silver') apiCall = this.adminService.SilverUsers();
    else if (rank === 'gold') apiCall = this.adminService.GoldUsers();
    else if (rank === 'diamond') apiCall = this.adminService.DiamondUsers();
    else return;

    apiCall.subscribe({
      next: (res: any) => {
        this.loading = false;

        // API original data
        this.users = res.data || res || [];

        // After load → apply date filter
        this.applyDateFilter();
      },
      error: () => {
        this.loading = false;
        this.errorMsg = 'Failed to fetch users.';
      }
    });
  }

  // When date changes
  onDateChange() {
    this.applyDateFilter();
  }

  // Apply date filtering (NO API CALL)
  applyDateFilter() {
    if (!this.fromDate && !this.toDate) {
      this.filteredUsers = [...this.users];
      return;
    }

    const from = this.fromDate ? new Date(this.fromDate) : null;
    const to = this.toDate ? new Date(this.toDate) : null;

    this.filteredUsers = this.users.filter(u => {
      const join = new Date(u.joindate || u.cdate);

      if (from && join < from) return false;
      if (to) {
        const end = new Date(this.toDate);
        end.setHours(23, 59, 59);
        if (join > end) return false;
      }

      return true;
    });

    if (!this.filteredUsers.length) {
      this.errorMsg = "No users found for selected date filters.";
    } else {
      this.errorMsg = "";
    }
  }

  togglePassword(user: any) {
    user.showPassword = !user.showPassword;
  }
}


