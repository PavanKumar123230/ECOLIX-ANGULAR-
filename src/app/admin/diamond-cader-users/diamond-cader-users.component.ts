import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-diamond-cader-users',
  templateUrl: './diamond-cader-users.component.html',
  styleUrls: ['./diamond-cader-users.component.scss']
})
export class DiamondCaderUsersComponent implements OnInit {
  selectedCader: string = '';
  users: any[] = [];
  loading = false;
  errorMsg = '';

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {}

  onCaderChange(event: any) {
    const cader = event.target.value;
    this.selectedCader = cader;
    this.users = [];
    this.errorMsg = '';
    if (cader) this.loadCaderUsers(cader);
  }

  loadCaderUsers(cader: string) {
    this.loading = true;
    let apiCall;

    switch (cader) {
      case 'gm1':
        apiCall = this.adminService.DiamondGm1();
        break;
      case 'gm2':
        apiCall = this.adminService.DiamondGm2();
        break;
      case 'gm3':
        apiCall = this.adminService.DiamondGm3();
        break;
      case 'gm4':
        apiCall = this.adminService.DiamondGm4();
        break;
      case 'gm5':
        apiCall = this.adminService.DiamondGm5();
        break;
      case 'gm6':
        apiCall = this.adminService.DiamondGm6();
        break;
      case 'bm':
        apiCall = this.adminService.DiamondBm();
        break;
      case 'director':
        apiCall = this.adminService.DiamondDirector();
        break;
      default:
        this.loading = false;
        return;
    }

    apiCall.subscribe({
      next: (res: any) => {
        this.loading = false;
        this.users = res.data || res || [];
        if (!this.users.length) this.errorMsg = 'No users found for this cadre.';
      },
      error: (err) => {
        this.loading = false;
        this.errorMsg = 'Failed to load cadre data.';
        console.error(err);
      }
    });
  }
}
