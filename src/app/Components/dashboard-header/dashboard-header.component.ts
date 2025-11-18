
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { UserService } from 'src/app/service/user.service';
import { SidebarService } from 'src/app/sidebar.service';
@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.scss']
})
export class DashboardHeaderComponent {
  homeData: any;
  data:any
  profiledata:any
  constructor(public sidebarService: SidebarService,private api:UserService, private token:TokenStorageService, private router:Router) {}
  ngOnInit(): void {
    this.getHome();
  }
  getHome() {
    this.api.Home().subscribe({
      next: (res: any) => {   // 👈 cast as any
        console.log('Home API response:', res);
        this.homeData = res.data;
        console.log('homedata:', this.homeData.profiledata);
        this.profiledata=this.homeData.profiledata
        console.log("profiledata:",this.profiledata)
      },
      error: (err) => {
        console.error('Error fetching home data:', err);
      }
    });
  }
  logout(){
    this.token.signOut1();
  }
  
}



