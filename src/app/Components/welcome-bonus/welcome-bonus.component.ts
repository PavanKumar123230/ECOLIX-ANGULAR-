import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-welcome-bonus',
  templateUrl: './welcome-bonus.component.html',
  styleUrls: ['./welcome-bonus.component.scss']
})
export class WelcomeBonusComponent implements OnInit {

  userTypes = [
    { value: 'Wallet_Level', label: 'Wallet Level' },
    { value: 'Wallet_Sponcer', label: 'Wallet Sponcer' },
    { value: 'Level_members', label: 'Level Members' }
  ];

  selectedUserType: string = '';
  tableData: any[] = []; // Stores API response

  constructor(private api: UserService) { }

  ngOnInit(): void { }

  onUserTypeChange() {
    console.log('Selected:', this.selectedUserType);
    this.fetchData(this.selectedUserType);
  }

  fetchData(type: string) {
    if (type === 'Wallet_Level') {
      this.api.walletLevel().subscribe({
        next: (res: any) => {
          this.tableData = res.data || [];
          console.log("Wallet Level Response:", res); // ✅ Log API response
        },
        error: (err) => console.error("Wallet Level Error:", err)
      });
    } else if (type === 'Wallet_Sponcer') {
      this.api.walletSponcer().subscribe({
        next: (res: any) => {
          this.tableData = res.data || [];
          console.log("Wallet Sponcer Response:", res); // ✅ Log API response
        },
        error: (err) => console.error("Wallet Sponcer Error:", err)
      });
    } else if (type === 'Level_members') {
      this.api.LevelMembersDataBYDate().subscribe({
        next: (res: any) => {
          this.tableData = res.data || [];
          console.log("Level Members Response:", res); // ✅ Log API response
        },
        error: (err) => console.error("Level Members Error:", err)
      });
    }
  }
}
