import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

interface ManagerOption {
  label: string;
  value: string;
}

@Component({
  selector: 'app-gold-managers-data',
  templateUrl: './gold-managers-data.component.html',
  styleUrls: ['./gold-managers-data.component.scss']
})
export class GoldManagersDataComponent implements OnInit {

  managerOptions: ManagerOption[] = [
    { label: 'Gold Manager 1', value: 'GoldManager1' },
    { label: 'Gold Manager 2', value: 'GoldManager2' },
    { label: 'Gold Manager 3', value: 'GoldManager3' },
    { label: 'Gold Manager 4', value: 'GoldManager4' },
    { label: 'Gold Manager 5', value: 'GoldManager5' },
    { label: 'Gold Manager 6', value: 'GoldManager6' },
    { label: 'Business Manager', value: 'GoldManager7' },
    { label: 'Director', value: 'GoldManager8' },
  ];

  selectedManager = '';
  managerData: any[] = [];
  loading = false;

  // Map string to actual UserService methods
  managerApiMap: { [key: string]: () => any } = {};

  constructor(private api: UserService) {}

  ngOnInit(): void {
    // Map selected option to API method
    this.managerApiMap = {
      GoldManager1: () => this.api.GoldManager1(),
      GoldManager2: () => this.api.GoldManager2(),
      GoldManager3: () => this.api.GoldManager3(),
      GoldManager4: () => this.api.GoldManager4(),
      GoldManager5: () => this.api.GoldrManager5(),
      GoldManager6: () => this.api.GoldManager6(),
      GoldManager7: () => this.api.GoldManager7(),
      GoldManager8: () => this.api.GoldManager8(),
    };
  }

  onManagerChange() {
    if (!this.selectedManager) return;

    const apiMethod = this.managerApiMap[this.selectedManager];
    if (!apiMethod) return;

    this.loading = true;
    this.managerData = [];

    apiMethod().subscribe({
      next: (res: any) => {
        this.managerData = res.data || [];
        this.loading = false;
      },
      error: (err: any) => {
        console.error(err);
        this.managerData = [];
        this.loading = false;
      }
    });
  }
}
