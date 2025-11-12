import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { Router } from '@angular/router';

interface MenuItem {
  label: string;
  icon: string;
  route?: string;
  children?: MenuItem[];
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  isSidebarOpen = true;
  isAdmin = false;
  isUser = false;

  openSubmenus: { [key: string]: boolean } = {};

  menuItems: MenuItem[] = [];

  constructor(private tokenService: TokenStorageService, private router: Router) {}

  ngOnInit(): void {
    this.checkRole();
    this.buildMenu();
  }

  checkRole() {
    this.isAdmin = this.tokenService.isAdmin();
    this.isUser = this.tokenService.isUser();
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  toggleSubmenu(key: string) {
    this.openSubmenus[key] = !this.openSubmenus[key];
  }

  buildMenu() {
    if (this.isUser) {
      this.menuItems = [
        { label: 'Dashboard', icon: 'bi bi-speedometer2', route: '/dashboard' },
        { label: 'Select Packages', icon: 'bi bi-box-seam', route: '/packages' },
        { label: 'Transfer Fund', icon: 'bi bi-arrow-left-right', route: '/transferfund' },
        { label: 'Received Fund', icon: 'bi bi-wallet2', route: '/receivedfund' },
        { label: 'My Users', icon: 'bi bi-person-circle', route: '/my-user' },
        { label: 'Welcome Bonus', icon: 'bi bi-gift', route: '/welcome-bonus' },
        { label: 'Silver Income', icon: 'bi bi-trophy', route: '/silver' },
        { label: 'Gold Income', icon: 'bi bi-award', route: '/gold' },
        { label: 'Diamond Income', icon: 'bi bi-gem', route: '/diamond' },
        { label: 'Wallet', icon: 'bi bi-cash-stack', route: '/wallet' },
        { label: 'Report', icon: 'bi bi-file-earmark-text', route: '/report' },
        { label: 'Logout', icon: 'bi bi-box-arrow-right', route: '/logout' },
        // { label: 'Profile', icon: 'bi bi-box-arrow-right', route: '/profile' },



      ];
    } else if (this.isAdmin) {
      this.menuItems = [
        { label: 'Dashboard', icon: 'bi bi-speedometer2', route: '/adashboard' },
        {
          label: 'Users',
          icon: 'bi bi-people',
          children: [
            { label: 'All Users', icon: 'bi bi-list', route: '/users' },
            { label: 'Add User', icon: 'bi bi-person-plus', route: '/users/add' }
          ]
        },
        {
          label: 'Payments',
          icon: 'bi bi-credit-card',
          children: [
            { label: 'Pending', icon: 'bi bi-clock', route: '/payments/pending' },
            { label: 'Approved', icon: 'bi bi-check', route: '/payments/approved' }
          ]
        },
        { label: 'Reports', icon: 'bi bi-bar-chart', route: '/reports' },
        { label: 'Logout', icon: 'bi bi-box-arrow-right', route: '/logout' },
      ];
    }
  }

  navigate(route: string | undefined) {
    if (route) this.router.navigate([route]);
  }
}
