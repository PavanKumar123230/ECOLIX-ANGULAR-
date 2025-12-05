import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-welcome-bonus',
  templateUrl: './welcome-bonus.component.html',
  styleUrls: ['./welcome-bonus.component.scss']
})
export class WelcomeBonusComponent implements OnInit {

  userTypes = [
    { value: 'Wallet_Level', label: 'Welcome Bonus Level Income' },
    { value: 'Level_members', label: 'Extra Welcome Bonus Rewards' }
  ];
  selectedUserType: string = '';
  tableData: any = [];
  today = new Date();

  constructor(private api: UserService) { }

  ngOnInit(): void {
    this.changeType('Wallet_Level');
  }

  changeType(type: string) {
    this.selectedUserType = type;
    this.currentPage = 1;
    this.fetchData(type);
  }

  // FETCH DATA FOR BOTH TABS
  fetchData(type: string) {
    // 1️⃣ WALLET LEVEL DATA
    if (type === 'Wallet_Level') {
      this.api.walletLevel().subscribe({
        next: (res: any) => {
          console.log("wallet",res)
          const data = res?.data || [];
          this.tableData = Array.isArray(data)
            ? data.filter((x: any) => x.paytype === 'join')
            : [];

          this.currentPage = 1;
        },
        error: (err) => console.error("Wallet Level Error:", err)
      });
    }
    // 2️⃣ LEVEL MEMBERS DATA
    if (type === 'Level_members') {
      this.api.LevelMembersDataBYDate().subscribe({
        next: (res: any) => {
          console.log("level",res)
          this.tableData = this.prepareLevels(res.data || {});
          this.currentPage = 1;
        },
        error: (err) => console.error("Level Members Error:", err)
      });
    }

  }

  // PAGINATION
  currentPage = 1;
  itemsPerPage = 10;

  get paginatedData() {
    if (!Array.isArray(this.tableData)) return [];
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.tableData.slice(start, start + this.itemsPerPage);
  }

  get totalPages() {
    if (!Array.isArray(this.tableData)) return 0;
    return Math.ceil(this.tableData.length / this.itemsPerPage);
  }

  // ============================
  // LEVEL MEMBERS LOGIC
  // ============================

  private parseCount(val: any): number {
    const n = Number(val);
    return isNaN(n) ? 0 : Math.max(0, Math.floor(n));
  }
  prepareLevels(data: any) {
    const totalLabels = [
      '10',
      '100',
      '1000 - 9,999',
      '10,000 - 99,999',
      '1Lac - 9,99,999',
      '10 Lacs - 99,999,999',
      '1 cr - above',
      '10 cr - above'
    ];
  
    const rows = [
      { key: 'Levelone', label: 'Level 1', target: 9, pv: '5 pv', date: data.Levelonedate },
      { key: 'Leveltwo', label: 'Level 2', target: 18, pv: '5 pv', date: data.Leveltwodate },
      { key: 'Levelthree', label: 'Level 3', target: 30, pv: 'Bangkok', date: data.Levelthreedate },
      { key: 'Levelfour', label: 'Level 4', target: 60, pv: '5 pv', date: data.Levelfourdate },
      { key: 'Levelfive', label: 'Level 5', target: 90, pv: '10 pv', date: data.Levelfivedate },
      { key: 'Levelsix', label: 'Level 6', target: 150, pv: '15 pv', date: data.Levelsixdate },
      { key: 'Levelseven', label: 'Level 7', target: 240, pv: '20 pv', date: data.Levelsevendate },
      { key: 'Leveleight', label: 'Level 8', target: 360, pv: '25 pv', date: data.Leveleightdate }
    ];
  
    return rows.map((r, idx) => {
      const count = this.parseCount(data[r.key]);
      const firstNumber = this.parseTotalLabel(totalLabels[idx]); // 🔹 parse first numeric value
  
      return {
        level: r.label,
        target: r.target,
        pv: r.pv,
        totalLabel: totalLabels[idx],
        count,
        earn: data[r.key + '_earn'] || 0,
        remaining: data[r.key + '_status'] || '-',
        date: r.date ? new Date(r.date) : null,
        status: this.calculateStatus(count, firstNumber, r.date) // pass firstNumber instead of target
      };
    });
  }
  
  /** Parse first numeric value from totalLabel string */
  private parseTotalLabel(label: string): number {
    // Remove commas, extract first number
    const match = label.replace(/[^\d]/g, '').match(/\d+/);
    return match ? parseInt(match[0], 10) : 0;
  }
  
  /** Updated calculateStatus */
  calculateStatus(count: number, totalLabelNumber: number, levelDate: any) {
    const today = this.stripTime(new Date());

    // If count is less than totalLabel number → Not Achieved
    if (count < totalLabelNumber) {
      // But only force Not Achieved for smaller levels, for higher levels keep date logic
      if (!levelDate || today > this.stripTime(new Date(levelDate))) {
        return 'Not Achieved';
      }
    }
  
    // Count meets or exceeds totalLabelNumber
    if (count >= totalLabelNumber) return 'Achieved';
    // If levelDate exists, check if still within target days → Running
    if (!levelDate) return 'Running';
    const deadline = this.stripTime(new Date(levelDate));
    if (today <= deadline) return 'Running';
  
    return 'Not Achieved';
  }
  
  

  //  ⭐ COLOR FUNCTION (renamed to avoid conflict)
  getStatusColor(status: string) {
    switch (status) {
      case 'Achieved': return '#28a745';
      case 'Running': return '#ffc107';
      case 'Not Achieved': return '#dc3545';
      default: return '#6c757d';
    }
  }
  private stripTime(d: Date) {
    return new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
  }


  getRemainingColor(value: string) {
  if (!value) return 'black';
  if (value.toLowerCase().includes('expired')) {
    return 'red';
  }

  return 'green';
}


}
