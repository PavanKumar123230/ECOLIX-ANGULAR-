import { Component } from '@angular/core';
import { SidebarService } from 'src/app/sidebar.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  isUserMenuOpen = false;
  isAdmin = false;
  isUser = false;

  constructor(
    private sidebarService: SidebarService,
    private tokenService: TokenStorageService
  ) {}

  ngOnInit(): void {
    this.checkRole();
  }

  get isOpen() {
    return this.sidebarService.isOpen;
  }

  closeSidebar() {
    this.sidebarService.isOpen = false;
  }

  toggleUserMenu() {
    this.isUserMenuOpen = !this.isUserMenuOpen;
  }

  // ✅ Check user role
  checkRole() {
    this.isAdmin = this.tokenService.isAdmin();
    this.isUser = this.tokenService.isUser();
  }
}
