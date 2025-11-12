import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/service/token-storage.service';
interface MenuItem {
  label: string;
  icon: string;
  route?: string;
  children?: MenuItem[];
}
@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent {

   isSidebarOpen = true;
  isAdmin = false;
  isUser = false;
  username = '';
  profileDropdownOpen = false;

  openSubmenus: { [key: string]: boolean } = {};
  menuItems: MenuItem[] = [];

  constructor(private tokenService: TokenStorageService, private router: Router) {}

  ngOnInit(): void {
    this.checkRole();
    this.buildMenu();
    this.username = this.tokenService.getUser() || 'Admin';
  }

  checkRole() {
    this.isAdmin = this.tokenService.isAdmin();
    this.isUser = this.tokenService.isUser();
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  toggleSubmenu(menu: string) {
    this.openSubmenus[menu] = !this.openSubmenus[menu];
  }

  toggleProfileDropdown() {
    this.profileDropdownOpen = !this.profileDropdownOpen;
  }

  navigate(route?: string) {
    if (route) this.router.navigate([route]);
  }

  logout() {
    this.tokenService.signOut();
    this.router.navigate(['/login']);
  }

  buildMenu() {
    if (this.isUser) {
      this.menuItems = [
        { label: 'Dashboard', icon: 'fas fa-tachometer-alt', route: '/dashboard' },
        { label: 'Packages', icon: 'fas fa-box', route: '/packages' },
        { label: 'Transfer Fund', icon: 'fas fa-exchange-alt', route: '/transferfund' },
        { label: 'Received Fund', icon: 'fas fa-wallet', route: '/receivedfund' },
        { label: 'My Users', icon: 'fas fa-users', route: '/my-user' },
        { label: 'Welcome Bonus', icon: 'fas fa-gift', route: '/welcome-bonus' },
      ];
    } else if (this.isAdmin) {
      this.menuItems = [
        { label: 'Dashboard', icon: 'fas fa-tachometer-alt', route: '/adashboard' },
        { label: 'Add Package', icon: 'bi bi-speedometer2', route: '/addpackage' },
         { label: 'Add Products', icon: 'bi bi-speedometer2', route: '/addproduct' },
          { label: 'Profile', icon: 'fas fa-edit', route: '/aprofile' },
        {
          label: 'Users',
          icon: 'fas fa-users',
          children: [
            { label: 'Today Users', icon: 'fas fa-list', route: '/todayactive' },
            { label: 'Total Users', icon: 'fas fa-user-plus', route: '/totalusers' },
            { label: 'Total Active Users', icon: 'fas fa-user-plus', route: '/totalactiveusers' },
            { label: 'Upgrade Users', icon: 'fas fa-user-plus', route: '/upgradeusers' },
            { label: 'Rank Users', icon: 'fas fa-user-plus', route: '/rankwiseusers' },
          ]
        },
            {
          label: 'Cader Users',
          icon: 'fas fa-users',
          children: [
            { label: 'Silver', icon: 'fas fa-list', route: '/silvercaderusers' },
            { label: 'Gold', icon: 'fas fa-list', route: '/goldcaderusers' },
            { label: 'Diamond', icon: 'fas fa-list', route: '/diamondcaderusers' },
          ]
        },
        {
          label: 'Payments',
          icon: 'fas fa-credit-card',
          children: [
            { label: 'Transfer', icon: 'fas fa-clock', route: '/transfertouser' },
            { label: 'Withdraw', icon: 'fas fa-clock', route: '/withdrawusers' },
            // { label: 'Approved', icon: 'fas fa-check', route: '/payments/approved' }
          ]
        },
        // { label: 'Reports', icon: 'fas fa-chart-line', route: '/reports' }
      ];
    }
  }

}
