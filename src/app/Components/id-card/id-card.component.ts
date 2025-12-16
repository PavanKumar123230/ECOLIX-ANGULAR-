import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-id-card',
  templateUrl: './id-card.component.html',
  styleUrls: ['./id-card.component.scss']
})
export class IdCardComponent implements OnInit {

  profiledata: any;

  constructor(private api: UserService, private router: Router) {}

  ngOnInit(): void {
    this.getHome();
  }

  getHome() {
    this.api.Home().subscribe({
      next: (res: any) => {
        this.profiledata = res?.data?.profiledata;
        console.log('profiledata:', this.profiledata);
      },
      error: (err) => {
        console.error('Error fetching home data:', err);
      }
    });
  }
}
