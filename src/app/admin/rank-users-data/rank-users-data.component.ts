import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-rank-users-data',
  templateUrl: './rank-users-data.component.html',
  styleUrls: ['./rank-users-data.component.scss']
})
export class RankUsersDataComponent implements OnInit {
  selectedRank: string = '';
  loading = false;
  users: any[] = [];
  errorMsg = '';

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {}

  onRankChange(event: any) {
    const rank = event.target.value;
    this.selectedRank = rank;
    this.users = [];
    this.errorMsg = '';
    if (rank) this.loadUsers(rank);
  }

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
        this.users = res.data || res || [];
        if (!this.users.length) this.errorMsg = 'No users found.';
      },
      error: (err) => {
        this.loading = false;
        this.errorMsg = 'Failed to fetch users.';
      }
    });
  }
}
