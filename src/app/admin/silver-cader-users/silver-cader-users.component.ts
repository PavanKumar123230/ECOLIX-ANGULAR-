import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-silver-cader-users',
  templateUrl: './silver-cader-users.component.html',
  styleUrls: ['./silver-cader-users.component.scss']
})
export class SilverCaderUsersComponent implements OnInit {
  selectedCader: string = '';
  loading = false;
  users: any[] = [];
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
      case 'gm1': apiCall = this.adminService.SilverGm1(); break;
      case 'gm2': apiCall = this.adminService.SilverGm2(); break;
      case 'gm3': apiCall = this.adminService.SilverGm3(); break;
      case 'gm4': apiCall = this.adminService.SilverGm4(); break;
      case 'gm5': apiCall = this.adminService.SilverGm5(); break;
      case 'gm6': apiCall = this.adminService.SilverGm6(); break;
      case 'bm': apiCall = this.adminService.SilverBm(); break;
      case 'director': apiCall = this.adminService.SilverDirector(); break;
      default: return;
    }

    apiCall.subscribe({
      next: (res: any) => {
        this.loading = false;
        this.users = res.data || res || [];
        if (!this.users.length) this.errorMsg = 'No users found in this cader.';
      },
      error: () => {
        this.loading = false;
        this.errorMsg = 'Failed to load cader users.';
      }
    });
  }
}
