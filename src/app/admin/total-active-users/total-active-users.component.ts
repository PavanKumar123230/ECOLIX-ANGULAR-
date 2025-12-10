// import { Component, OnInit } from '@angular/core';
// import { AdminService } from 'src/app/service/admin.service';

// @Component({
//   selector: 'app-total-active-users',
//   templateUrl: './total-active-users.component.html',
//   styleUrls: ['./total-active-users.component.scss']
// })
// export class TotalActiveUsersComponent implements OnInit {
//   loading = false;

//   activeUsers: any[] = [];
//   currentPageActive = 1;
//   itemsPerPage = 10;

//   joinUsers: any[] = [];
//   currentPageJoin = 1;

//   activeTab: 'active' | 'join' = 'active'; // Default tab

//   constructor(private adminService: AdminService) {}

//   ngOnInit(): void {
//     this.loadTodayActive();
//     this.loadTodayJoin();
//   }

//   // ===== Active Users Pagination =====
//   get totalPagesActive() {
//     return Math.ceil(this.activeUsers.length / this.itemsPerPage);
//   }

//   get paginatedActiveUsers() {
//     const start = (this.currentPageActive - 1) * this.itemsPerPage;
//     const end = start + this.itemsPerPage;
//     return this.activeUsers.slice(start, end);
//   }

//   get totalPagesJoin() {
//     return Math.ceil(this.joinUsers.length / this.itemsPerPage);
//   }

//   get paginatedJoinUsers() {
//     const start = (this.currentPageJoin - 1) * this.itemsPerPage;
//     const end = start + this.itemsPerPage;
//     return this.joinUsers.slice(start, end);
//   }

//   // ===== Load Active Users =====
//   loadTodayActive() {
//     this.loading = true;
//     this.adminService.TotalActiveUsers().subscribe({
//       next: (res: any) => {
//         console.log(res);
        
//         this.activeUsers = (res.data || res).map((u: any) => ({
//           ...u,

//           showPassword: false
//         }));
//         this.loading = false;
//         this.currentPageActive = 1;
//       },
//       error: (err) => {
//         console.error(err);
//         this.loading = false;
//       }
//     });
//   }

//   loadTodayJoin() {
//     this.loading = true;
//     this.adminService.TotalInactiveUsers().subscribe({
//       next: (res: any) => {
//         this.joinUsers = (res.data || res).map((u: any) => ({
//           ...u,
//           showPassword: false
//         }));
//         this.loading = false;
//         this.currentPageJoin = 1;
//       },
//       error: (err) => {
//         console.error(err);
//         this.loading = false;
//       }
//     });
//   }

//   switchTab(tab: 'active' | 'join') {
//     this.activeTab = tab;
//   }

//   togglePassword(user: any) {
//     user.showPassword = !user.showPassword;
//   }
// }

import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-total-active-users',
  templateUrl: './total-active-users.component.html',
  styleUrls: ['./total-active-users.component.scss']
})
export class TotalActiveUsersComponent implements OnInit {

  loading = false;

  activeUsers: any[] = [];
  filteredActiveUsers: any[] = [];

  joinUsers: any[] = [];
  filteredJoinUsers: any[] = [];

  activeTab: 'active' | 'join' = 'active';

  fromDate = '';
  toDate = '';

  // Pagination
  itemsPerPage = 10;
  currentPageActive = 1;
  currentPageJoin = 1;

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.loadTodayActive();
    this.loadTodayJoin();
  }

  /** ===========================
   * LOAD ACTIVE USERS
   * ============================ */
  loadTodayActive() {
    this.loading = true;

    this.adminService.TotalActiveUsers().subscribe({
      next: (res: any) => {
        this.activeUsers = (res.data || res).map((u: any) => ({
          ...u,
          showPassword: false
        }));

        this.filteredActiveUsers = [...this.activeUsers];
        this.loading = false;
        this.currentPageActive = 1;
      },
      error: () => (this.loading = false)
    });
  }

  /** ===========================
   * LOAD JOINED USERS
   * ============================ */
  loadTodayJoin() {
    this.loading = true;

    this.adminService.TotalInactiveUsers().subscribe({
      next: (res: any) => {
        this.joinUsers = (res.data || res).map((u: any) => ({
          ...u,
          showPassword: false
        }));

        this.filteredJoinUsers = [...this.joinUsers];
        this.loading = false;
        this.currentPageJoin = 1;
      },
      error: () => (this.loading = false)
    });
  }

  /** ===========================
   * DATE FILTER
   * ============================ */
  filterByDate() {
    if (!this.fromDate && !this.toDate) {
      this.filteredActiveUsers = [...this.activeUsers];
      this.filteredJoinUsers = [...this.joinUsers];
      return;
    }

    const from = this.fromDate ? new Date(this.fromDate) : null;
    const to = this.toDate ? new Date(this.toDate) : null;

    if (to) {
      to.setHours(23, 59, 59);
    }

    // ACTIVE USERS FILTER
    this.filteredActiveUsers = this.activeUsers.filter(u => {
      const date = new Date(u.cdate);
      if (from && date < from) return false;
      if (to && date > to) return false;
      return true;
    });

    // JOIN USERS FILTER
    this.filteredJoinUsers = this.joinUsers.filter(u => {
      const date = new Date(u.cdate);
      if (from && date < from) return false;
      if (to && date > to) return false;
      return true;
    });

    this.currentPageActive = 1;
    this.currentPageJoin = 1;
  }

  /** ===========================
   * PAGINATION
   * ============================ */
  get paginatedActiveUsers() {
    const start = (this.currentPageActive - 1) * this.itemsPerPage;
    return this.filteredActiveUsers.slice(start, start + this.itemsPerPage);
  }

  get totalPagesActive() {
    return Math.ceil(this.filteredActiveUsers.length / this.itemsPerPage);
  }

  get paginatedJoinUsers() {
    const start = (this.currentPageJoin - 1) * this.itemsPerPage;
    return this.filteredJoinUsers.slice(start, start + this.itemsPerPage);
  }

  get totalPagesJoin() {
    return Math.ceil(this.filteredJoinUsers.length / this.itemsPerPage);
  }

  /** ===========================
   * SWITCH TABS
   * ============================ */
  switchTab(tab: 'active' | 'join') {
    this.activeTab = tab;
  }

  /** ===========================
   * PASSWORD TOGGLE
   * ============================ */
  togglePassword(user: any) {
    user.showPassword = !user.showPassword;
  }
}

