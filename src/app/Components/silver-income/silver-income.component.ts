import { Component } from '@angular/core';

@Component({
  selector: 'app-silver-income',
  templateUrl: './silver-income.component.html',
  styleUrls: ['./silver-income.component.scss']
})
export class SilverIncomeComponent {
  userTypes = [
    { value: 'level_Income', label: 'Level Income' },
    { value: 'bonanaza_income', label: 'Bonanaza Income' },
    { value: 'salary_income', label: 'Salary' },
    { value: 'loan', label: 'Loan' },
    { value: 'franchise', label: 'Franchise' },
  ];

  selectedUserType: string = '';

  onUserTypeChange() {
    console.log('Selected:', this.selectedUserType);
  }
}
