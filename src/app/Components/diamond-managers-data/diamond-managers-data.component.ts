import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

interface ManagerOption {
  label: string;
  value: string;
}

@Component({
  selector: 'app-diamond-managers-data',
  templateUrl: './diamond-managers-data.component.html',
  styleUrls: ['./diamond-managers-data.component.scss']
})
export class DiamondManagersDataComponent implements OnInit {

  managerOptions: ManagerOption[] = [
    { label: 'Diamond Manager 1', value: 'DiamondManager1' },
    { label: 'Diamond Manager 2', value: 'DiamondManager2' },
    { label: 'Diamond Manager 3', value: 'DiamondManager3' },
    { label: 'Diamond Manager 4', value: 'DiamondManager4' },
    { label: 'Diamond Manager 5', value: 'DiamondManager5' },
    { label: 'Diamond Manager 6', value: 'DiamondManager6' },
    { label: 'Business Manager', value: 'DiamondManager7' },
    { label: 'Director', value: 'DiamondManager8' },
  ];

  selectedManager = 'DiamondManager1';  // ✅ Default selection
  managerData: any[] = [];
  loading = false;

  managerApiMap: { [key: string]: () => any } = {};

  constructor(private api: UserService) {}

  ngOnInit(): void {
    this.managerApiMap = {
      DiamondManager1: () => this.api.DiamondManager1(),
      DiamondManager2: () => this.api.DiamondManager2(),
      DiamondManager3: () => this.api.DiamondManager3(),
      DiamondManager4: () => this.api.DiamondManager4(),
      DiamondManager5: () => this.api.DiamondManager5(),
      DiamondManager6: () => this.api.DiamondManager6(),
      DiamondManager7: () => this.api.DiamondManager7(),
      DiamondManager8: () => this.api.DiamondManager8(),
    };

    this.onManagerChange(); // ✅ Auto-load default manager’s data
  }

  selectManager(value: string) {
    this.selectedManager = value;
    this.onManagerChange();
  }

  onManagerChange() {
    const apiMethod = this.managerApiMap[this.selectedManager];
    if (!apiMethod) return;

    this.loading = true;
    this.managerData = [];

    apiMethod().subscribe({
      next: (res: any) => {
        this.managerData = res.data || [];
        this.loading = false;
      },
      error: () => {
        this.managerData = [];
        this.loading = false;
      }
    });
  }
}
