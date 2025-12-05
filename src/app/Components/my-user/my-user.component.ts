import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-my-user',
  templateUrl: './my-user.component.html',
  styleUrls: ['./my-user.component.scss']
})
export class MyUserComponent implements OnInit {
  transactions: any[] = [];
  data1: any[] = [];
  selectedPackage: string = '';

  constructor(private api: UserService) {}

  ngOnInit(): void {
    this.getdirectdata();
  }

  getdirectdata(): void {
    this.api.DirectTeam().subscribe({
      next: (res: any) => {

        console.log('Direct Team Data:', res);
    if (res.status === 1 && Array.isArray(res.data)) {
  this.transactions = res.data.map((item: any) => ({
    ...item,
    showPassword: false   // 🔥 added flag for each row
  }));
}
else {
          this.transactions = [];
        }
      },
      error: (err) => {
        console.error('Error fetching direct team data:', err);
        this.transactions = [];
      }
    });
  }

  onPackageSelect(): void {
    console.log("directteam:",this.transactions)
    console.log('Selected Package ID:', this.selectedPackage);


  }
}
