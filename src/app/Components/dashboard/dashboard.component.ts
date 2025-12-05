import { Component } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  homeData: any;
  data:any;
  profiledata: any;
  constructor(private api: UserService,private router: Router) {}

  ngOnInit(): void {
    this.getHome();
  }
  goToWelcomeBonus() {
    this.router.navigate(['/welcome-bonus']);
  }
  totalReferal(){
    this.router.navigate(['/my-user']);

  }


  levelmember(){
    this.router.navigate(['/levelwise-team']);

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

}