import { Component } from '@angular/core';

interface Transaction {
  sno: number;
  date: string;
  userId: string;
  amount: string;
  status: 'Success' | 'Pending' | 'Failed';
}

@Component({
  selector: 'app-received-fund',
  templateUrl: './received-fund.component.html',
  styleUrls: ['./received-fund.component.scss']
})
export class ReceivedFundComponent {


  transactions = [
    { sno: 1, date: '2025-11-12', userId: 'USR101', amount: 2500, status: 'Approved' },
    { sno: 2, date: '2025-11-11', userId: 'USR102', amount: 1800, status: 'Pending' },
    { sno: 3, date: '2025-11-10', userId: 'USR103', amount: 2200, status: 'Rejected' },
  ];
  
}