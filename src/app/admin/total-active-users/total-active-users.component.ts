import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-total-active-users',
  templateUrl: './total-active-users.component.html',
  styleUrls: ['./total-active-users.component.scss']
})
export class TotalActiveUsersComponent implements OnInit {
  loading = false;

  // Active Users
  activeUsers: any[] = [];
  currentPageActive = 1;
  itemsPerPage = 10;

  // Joined Users
  joinUsers: any[] = [];
  currentPageJoin = 1;

  activeTab: 'active' | 'join' = 'active'; // Default tab

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.loadTodayActive();
    this.loadTodayJoin();
  }

  // ===== Active Users Pagination =====
  get totalPagesActive() {
    return Math.ceil(this.activeUsers.length / this.itemsPerPage);
  }

  get paginatedActiveUsers() {
    const start = (this.currentPageActive - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.activeUsers.slice(start, end);
  }

  // ===== Joined Users Pagination =====
  get totalPagesJoin() {
    return Math.ceil(this.joinUsers.length / this.itemsPerPage);
  }

  get paginatedJoinUsers() {
    const start = (this.currentPageJoin - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.joinUsers.slice(start, end);
  }

  // ===== Load Active Users =====
  loadTodayActive() {
    this.loading = true;
    this.adminService.TotalActiveUsers().subscribe({
      next: (res: any) => {
        this.activeUsers = (res.data || res).map((u: any) => ({
          ...u,
          showPassword: false
        }));
        this.loading = false;
        this.currentPageActive = 1;
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      }
    });
  }

  // ===== Load Joined Users =====
  loadTodayJoin() {
    this.loading = true;
    this.adminService.TotalInactiveUsers().subscribe({
      next: (res: any) => {
        this.joinUsers = (res.data || res).map((u: any) => ({
          ...u,
          showPassword: false
        }));
        this.loading = false;
        this.currentPageJoin = 1;
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      }
    });
  }

  // ===== Switch Tabs =====
  switchTab(tab: 'active' | 'join') {
    this.activeTab = tab;
  }

  // ===== Toggle Password =====
  togglePassword(user: any) {
    user.showPassword = !user.showPassword;
  }
}
