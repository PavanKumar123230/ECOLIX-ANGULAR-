
import { Component } from '@angular/core';
import { SidebarService } from 'src/app/sidebar.service';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.scss']
})
export class DashboardHeaderComponent {

  constructor(public sidebarService: SidebarService) {}

}

