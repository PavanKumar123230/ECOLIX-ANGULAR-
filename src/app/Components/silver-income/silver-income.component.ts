import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-silver-income',
  templateUrl: './silver-income.component.html',
  styleUrls: ['./silver-income.component.scss']
})
export class SilverIncomeComponent implements OnInit {

  constructor(private api: UserService) { }

  userTypes = [
    { value: 'WalletSponcer', label: 'Sponcer Income' },
    { value: 'level_Income', label: 'Level Income' },
    { value: 'bonanaza_income', label: 'Bonanaza Income' },
    { value: 'salary_income', label: 'Salary' },
    { value: 'loan', label: 'Loan' },
    { value: 'franchise', label: 'Franchise' },
  ];
  

  selectedUserType: string = '';
  tableData: any[] = [];

  ngOnInit(): void { }

  onUserTypeChange() {
    this.fetchData(this.selectedUserType);
    console.log('Selected:', this.selectedUserType);
  }

 fetchData(type: string) {
  this.tableData = []; 

  if (type === 'WalletSponcer') {
    this.api.walletSponcer().subscribe({
      next: (res: any) => {
        this.tableData = res.data || [];
        console.log("Wallet Sponcer Response:", res);
      },
      error: (err) => console.error("Wallet Sponcer Error:", err)
    });
  }
}

}
