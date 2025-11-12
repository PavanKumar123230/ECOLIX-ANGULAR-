import { Component } from '@angular/core';
import { SidebarService } from 'src/app/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  isUserMenuOpen = false;

  constructor(private sidebarService: SidebarService) {}

  get isOpen() {
    return this.sidebarService.isOpen;
  }
  closeSidebar() {
    this.sidebarService.isOpen = false;
  }

  // 🔽 Toggle submenu for Users
  toggleUserMenu() {
    this.isUserMenuOpen = !this.isUserMenuOpen;
  }
}
