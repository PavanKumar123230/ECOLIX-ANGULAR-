import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome-bonus',
  templateUrl: './welcome-bonus.component.html',
  styleUrls: ['./welcome-bonus.component.scss']
})
export class WelcomeBonusComponent {

  userTypes = [
    { value: 'level_Income', label: 'Level Income' },
    { value: 'bonanaza_income', label: 'Bonus Income' },
  ];

  selectedUserType: string = '';

  onUserTypeChange() {
    console.log('Selected:', this.selectedUserType);
  }
}
