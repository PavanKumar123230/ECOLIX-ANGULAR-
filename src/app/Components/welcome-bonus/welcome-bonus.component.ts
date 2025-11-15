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
  tableData: any;

  today = new Date();

  constructor(private api: UserService) { }

  ngOnInit(): void { }

  onUserTypeChange() {
    this.fetchData(this.selectedUserType);
  }

  fetchData(type: string) {
    if (type === 'Wallet_Level') {
      this.api.walletLevel().subscribe({
        next: (res: any) => {
           this.tableData = res.data.filter((x: any) => x.paytype === 'join');
          console.log("Wallet Level Response:", res);
        },
        error: (err) => console.error("Wallet Level Error:", err)
      });

    } else if (type === 'Level_members') {

      this.api.LevelMembersDataBYDate().subscribe({
        next: (res: any) => {
          this.tableData = this.prepareLevels(res.data || {});
          console.log("Level Members Response:", this.tableData);
        },
        error: (err) => console.error("Level Members Error:", err)
      });

    }
  }

  // inside WelcomeBonusComponent

// helper to safely parse a count (API may send string/number/null)
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

    return {
      level: r.label,
      target: r.target,
      pv: r.pv,
      totalLabel: totalLabels[idx],
      count: count,
      date: r.date ? new Date(r.date) : null,
      status: this.getStatus(count, r.target, r.date)
    };
  });
}

getStatus(count: number, target: number, levelDate: string | Date | null) {
  const today = this.stripTime(new Date());

  // Achieved
  if (count >= target) return 'Achieved';

  // No date → still running
  if (!levelDate) return 'Running';

  const deadline = this.stripTime(new Date(levelDate));

  // Deadline not reached → running
  if (today <= deadline) return 'Running';

  // Deadline passed → not achieved
  return 'Not Achieved';
}


private stripTime(d: Date) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
}


}
