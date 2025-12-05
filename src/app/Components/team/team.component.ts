import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
[x: string]: any;

  selectedUserType: string = 'level1';

  currentPage: number = 1;
  itemsPerPage: number = 10;

  levelData: any = {
    level1: [],
    level2: [],
    level3: [],
    level4: [],
    level5: [],
    level6: [],
    level7: [],
    level8: [],
  };
  userTypes = [
    { value: 'level1', label: 'Level 1' },
    { value: 'level2', label: 'Level 2' },
    { value: 'level3', label: 'Level 3' },
    { value: 'level4', label: 'Level 4' },
    { value: 'level5', label: 'Level 5' },
    { value: 'level6', label: 'Level 6' },
    { value: 'level7', label: 'Level 7' },
    { value: 'level8', label: 'Level 8' },
  ];

  constructor(private api: UserService) {}

  ngOnInit(): void {
    this.getLevelMembers();
  }

  // ⭐ PAGINATION DATA
  get paginatedData() {
    const data = this.levelData[this.selectedUserType] || [];
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return data.slice(start, start + this.itemsPerPage);
  }

  get totalPages(): number {
    return Math.ceil(
      (this.levelData[this.selectedUserType]?.length || 0) / this.itemsPerPage
    );
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  selectType(type: string) {
    this.selectedUserType = type;
    this.currentPage = 1;  // reset page
  }

  getLevelMembers() {
    this.api.levelmembers().subscribe({
      next: (res: any) => {
        this.levelData.level1 = res.data.Levelone || [];
        this.levelData.level2 = res.data.Leveltwo || [];
        this.levelData.level3 = res.data.Levelthree || [];
        this.levelData.level4 = res.data.Levelfour || [];
        this.levelData.level5 = res.data.Levelfive || [];
        this.levelData.level6 = res.data.Levelsix || [];
        this.levelData.level7 = res.data.Levelseven || [];
        this.levelData.level8 = res.data.Leveleight || [];

        this.selectedUserType = 'level1';
        this.currentPage = 1;
      }
    });
  }
}
