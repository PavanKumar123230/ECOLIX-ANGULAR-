import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

interface ManagerOption {
  label: string;
  value: string;
}
@Component({
  selector: 'app-silver-managers-data',
  templateUrl: './silver-managers-data.component.html',
  styleUrls: ['./silver-managers-data.component.scss']
})
export class SilverManagersDataComponent implements OnInit {
  managerOptions: ManagerOption[] = [
    { label: 'Silver Manager 1', value: 'SilverManager1' },
    { label: 'Silver Manager 2', value: 'SilverManager2' },
    { label: 'Silver Manager 3', value: 'SilverManager3' },
    { label: 'Silver Manager 4', value: 'SilverManager4' },
    { label: 'Silver Manager 5', value: 'SilverManager5' },
    { label: 'Silver Manager 6', value: 'SilverManager6' },
    { label: 'Business Manager', value: 'SilverManager7' },
    { label: 'Director', value: 'SilverManager8' },
  ];
  selectedManager = 'SilverManager1';   // ✅ Default selected
  managerData: any[] = [];
  loading = false;
  // Mapping manager to API method
  managerApiMap: { [key: string]: () => any } = {};
  constructor(private api: UserService) { }
  ngOnInit(): void {
    // Map API methods
    this.managerApiMap = {
      SilverManager1: () => this.api.SilverManager1(),
      SilverManager2: () => this.api.SilverManager2(),
      SilverManager3: () => this.api.SilverManager3(),
      SilverManager4: () => this.api.SilverManager4(),
      SilverManager5: () => this.api.SilverManager5(),
      SilverManager6: () => this.api.SilverManager6(),
      SilverManager7: () => this.api.SilverManager7(),
      SilverManager8: () => this.api.SilverManager8(),
    };
    // Load default manager data automatically
    this.onManagerChange();
  }

  // When a button is clicked
  selectManager(value: string) {
    this.selectedManager = value;
    this.onManagerChange();
  }

  // Fetch API for selected manager
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
