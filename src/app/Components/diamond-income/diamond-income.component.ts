import { Component } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
@Component({
  selector: 'app-diamond-income',
  templateUrl: './diamond-income.component.html',
  styleUrls: ['./diamond-income.component.scss']
})
export class DiamondIncomeComponent {
  constructor(private api: UserService) { }
  userTypes = [
    { value: 'sponcer', label: 'Sponcer Income' },
    { value: 'level', label: 'Level Income' },
    { value: 'bonanza', label: 'Bonanza Rewards' },
    { value: 'salary', label: 'Salary' },
    { value: 'loan', label: 'Loan' },
  ];
  selectedUserType: string = 'sponcer'; 
  tableData: any[] = [];
  ngOnInit(): void {
    this.onUserTypeChange();
  }

  selectType(type: string) {
    this.selectedUserType = type;
    this.onUserTypeChange();
  }

  onUserTypeChange() {
    this.fetchData();
  }

  fetchData() {
    this.tableData = [];
    this.api.diamondIncome().subscribe({
      next: (res: any) => {
        const allData = res.data || [];
        // FILTER BY method
        this.tableData = allData.filter(
          (item: any) => item.method?.toLowerCase() === this.selectedUserType.toLowerCase()
        );
        console.log("Filtered:", this.tableData);
      },
      error: (err) => console.error("Error:", err)
    });
  }

}

