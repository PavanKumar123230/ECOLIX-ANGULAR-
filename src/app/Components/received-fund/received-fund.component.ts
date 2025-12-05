import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
@Component({
  selector: 'app-received-fund',
  templateUrl: './received-fund.component.html',
  styleUrls: ['./received-fund.component.scss']
})
export class ReceivedFundComponent implements OnInit {
  transactions: any[] = [];
  constructor(private api: UserService) {}
  ngOnInit(): void {
    this.getReceivedReport();
  }
  getReceivedReport() {
    this.api.recivedReport().subscribe({
      next: (res: any) => {
        console.log('reportdd:', res);
        if (res.status === 1 && Array.isArray(res.data)) {
          this.transactions = res.data;
        } else {
          this.transactions = [];
        }
      },
      error: (err) => {
        console.error('Error fetching report:', err);
        this.transactions = [];
      },
    });
  }
}
