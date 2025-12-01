// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { SidebarService } from 'src/app/sidebar.service';
// import { TokenStorageService } from 'src/app/service/token-storage.service';
// interface MenuItem {
//   label: string;
//   icon: string;
//   route?: string;
//   children?: MenuItem[];
// }
// @Component({
//   selector: 'app-sidebar',
//   templateUrl: './sidebar.component.html',
//   styleUrls: ['./sidebar.component.scss']
// })
// export class SidebarComponent implements OnInit {
//   isSidebarOpen = false;
//   isAdmin = false;
//   isUser = false;
//   openSubmenus: { [key: string]: boolean } = {};
//   menuItems: MenuItem[] = [];
//   constructor(
//     private sidebarService: SidebarService,
//     private tokenService: TokenStorageService,
//     private router: Router
//   ) {}
//   ngOnInit(): void {
//     this.checkRole();
//     this.buildMenu();
//   }
//   toggleSidebar() {
//     this.sidebarService.toggleSidebar();
//   }
//   toggleSubmenu(key: string) {
//     this.openSubmenus[key] = !this.openSubmenus[key];
//   }
//   navigate(route?: string) {
//     if (route) this.router.navigate([route]);
//   }
//     logout() {
//     this.tokenService.signOut1();
//     this.router.navigate(['/login']);
//   }
//   checkRole() {
//     this.isAdmin = this.tokenService.isAdmin();
//     this.isUser = this.tokenService.isUser();
//   }

//   buildMenu() {
//     if (this.isUser) {
//       this.menuItems = [
//         { label: 'Dashboard', icon: 'bi bi-speedometer2', route: '/dashboard' },
//         { label: 'Packages', icon: 'bi bi-box-seam', route: '/packages' },
//         { label: 'Transfer Fund', icon: 'bi bi-arrow-left-right', route: '/transferfund' },
//         { label: 'Received Fund', icon: 'bi bi-wallet2', route: '/receivedfund' },
//         { label: 'My Users', icon: 'bi bi-person-circle', route: '/my-user' },
//         { label: 'Welcome Bonus', icon: 'bi bi-gift', route: '/welcome-bonus' },
//         { label: 'Silver Income', icon: 'bi bi-trophy', route: '/silver' },
//         { label: 'Gold Income', icon: 'bi bi-award', route: '/gold' },
//         { label: 'Diamond Income', icon: 'bi bi-gem', route: '/diamond' },
//         { label: 'Wallet', icon: 'bi bi-cash-stack', route: '/wallet' },
//         { label: 'Report', icon: 'bi bi-file-earmark-text', route: '/report' },
//         // { label: 'Logout', icon: 'bi bi-box-arrow-right', route: '/logout' },
//         // { label: 'Profile', icon: 'bi bi-box-arrow-right', route: '/profile' },
//         { label: 'Wallet', icon: 'bi bi-wallet2', route: '/wallet' },
//         { label: 'Silver Manager', icon: 'bi bi-file-earmark-text', route: '/silvermanager' },
//         { label: 'Gold Manager', icon: 'bi bi-file-earmark-text', route: '/goldmanager' },
//         { label: 'Diamond Manager', icon: 'bi bi-file-earmark-text', route: '/diamondmanager' },
//         // { label: 'Report', icon: 'bi bi-file-earmark-text', route: '/report' },
//       ];
//     } else if (this.isAdmin) {
//       this.menuItems = [
//         { label: 'Dashboard', icon: 'bi bi-speedometer2', route: '/adashboard' },
//         {
//           label: 'Users',
//           icon: 'bi bi-people',
//           children: [
//             { label: 'All Users', icon: 'bi bi-list', route: '/users' },
//             { label: 'Add User', icon: 'bi bi-person-plus', route: '/users/add' },
//           ]
//         },
//         { label: 'Reports', icon: 'bi bi-bar-chart', route: '/reports' },
//         { label: 'Logout', icon: 'bi bi-box-arrow-right', route: '/logout' },
//       ];
//     }
//   }
// }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarService } from 'src/app/sidebar.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';

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
  isSidebarOpen = false;
  isAdmin = false;
  isUser = false;
  openSubmenus: { [key: string]: boolean } = {};
  menuItems: MenuItem[] = [];

  constructor(
    public sidebarService: SidebarService, // 🔹 make it public
    private tokenService: TokenStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.checkRole();
    this.buildMenu();
  }

  toggleSidebar() {
    this.sidebarService.toggleSidebar();
  }

  toggleSubmenu(key: string) {
    this.openSubmenus[key] = !this.openSubmenus[key];
  }

  // navigate(route?: string) {
  //   if (route) this.router.navigate([route]);
  // }

  navigate(route?: string) {
    if (route) {
      this.router.navigate([route]);
    }
  
    // 🔥 Close sidebar after clicking
    this.sidebarService.toggleSidebar();
  }
  

  logout() {
    this.tokenService.signOut1();
  }

  checkRole() {
    this.isAdmin = this.tokenService.isAdmin();
    this.isUser = this.tokenService.isUser();
  }

  buildMenu() {
    if (this.isUser) {
      this.menuItems = [
        { label: 'Dashboard', icon: 'bi bi-speedometer2', route: '/dashboard' },
        { label: 'Buy Packages', icon: 'bi bi-box-seam', route: '/packages' },
        { label: 'Transfer Fund', icon: 'bi bi-arrow-left-right', route: '/transferfund' },
        { label: 'Received Fund', icon: 'bi bi-wallet2', route: '/receivedfund' },
        { label: 'My Users', icon: 'bi bi-person-circle', route: '/my-user' },
        { label: 'Welcome Bonus', icon: 'bi bi-gift', route: '/welcome-bonus' },
        { label: 'Silver Income', icon: 'bi bi-trophy', route: '/silver' },
        { label: 'Gold Income', icon: 'bi bi-award', route: '/gold' },
        { label: 'Diamond Income', icon: 'bi bi-gem', route: '/diamond' },
        { label: 'Wallet', icon: 'bi bi-cash-stack', route: '/wallet' },
        { label: 'Report', icon: 'bi bi-file-earmark-text', route: '/report' },
        { label: 'Silver Manager', icon: 'bi bi-file-earmark-text', route: '/silvermanager' },
        { label: 'Gold Manager', icon: 'bi bi-file-earmark-text', route: '/goldmanager' },
        { label: 'Diamond Manager', icon: 'bi bi-file-earmark-text', route: '/diamondmanager' },
        { label: 'Support', icon: 'bi bi-file-earmark-text', route: '/support' }

      ];
    } else if (this.isAdmin) {
      this.menuItems = [
        { label: 'Dashboard', icon: 'bi bi-speedometer2', route: '/adashboard' },
        {
          label: 'Users',
          icon: 'bi bi-people',
          children: [
            { label: 'All Users', icon: 'bi bi-list', route: '/users' },
            { label: 'Add User', icon: 'bi bi-person-plus', route: '/users/add' },
          ]
        },
        { label: 'Reports', icon: 'bi bi-bar-chart', route: '/reports' },
        { label: 'Logout', icon: 'bi bi-box-arrow-right', route: '/logout' },
      ];
    }
  }
}

