import { Component } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-total-active-users',
  templateUrl: './total-active-users.component.html',
  styleUrls: ['./total-active-users.component.scss']
})
export class TotalActiveUsersComponent {

   loading = false;
    activeUsers: any[] = [];
    joinUsers: any[] = [];
    activeTab: 'active' | 'join' = 'active'; // Default tab
  
    constructor(private adminService: AdminService) {}
  
    ngOnInit(): void {
      this.loadTodayActive();
      this.loadTodayJoin();
    }
  
    // ✅ Today Active Users
    loadTodayActive() {
      this.loading = true;
      this.adminService.TotalActiveUsers().subscribe({
        next: (res: any) => {
          console.log('Active users:', res);
          this.activeUsers = res.data || res;
          this.loading = false;
        },
        error: (err) => {
          console.error(err);
          this.loading = false;
        }
      });
    }
  
    // ✅ Today Join Users
    loadTodayJoin() {
      this.loading = true;
      this.adminService.TotalInactiveUsers().subscribe({
        next: (res: any) => {
          console.log('Join users:', res);
          this.joinUsers = res.data || res;
          this.loading = false;
        },
        error: (err) => {
          console.error(err);
          this.loading = false;
        }
      });
    }
  
    // ✅ Switch Tabs
    switchTab(tab: 'active' | 'join') {
      this.activeTab = tab;
    }

    togglePassword(user: any) {
      user.showPassword = !user.showPassword;
    }
    

}
