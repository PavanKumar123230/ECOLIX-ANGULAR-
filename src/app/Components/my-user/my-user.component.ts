import { Component } from '@angular/core';

@Component({
  selector: 'app-my-user',
  templateUrl: './my-user.component.html',
  styleUrls: ['./my-user.component.scss']
})
export class MyUserComponent {

  
  userTypes = [
    { value: 'my_referrals', label: 'My Referrals' },
    { value: 'bonus_user', label: 'Bonus User' },
    { value: 'silver_user', label: 'Silver User' },
    { value: 'gold_user', label: 'Gold User' },
    { value: 'diamond_user', label: 'Diamond User' }
  ];

  selectedUserType: string = '';

  onUserTypeChange() {
    console.log('Selected:', this.selectedUserType);
  }
}