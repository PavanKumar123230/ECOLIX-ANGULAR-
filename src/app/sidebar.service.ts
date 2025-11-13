// import { Injectable } from '@angular/core';
// @Injectable({
//   providedIn: 'root'
// })
// export class SidebarService {
//   isOpen: boolean = true;
//   toggleSidebar() {
//     this.isOpen = !this.isOpen;
//   }
//   closeSidebar() {
//     this.isOpen = false;
//   }
//   openSidebar() {
//     this.isOpen = true;
//   }
// }


import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SidebarService {
  private sidebarOpen = new BehaviorSubject<boolean>(false);
  isOpen = this.sidebarOpen.asObservable();

  toggleSidebar() {
    this.sidebarOpen.next(!this.sidebarOpen.value);
  }
}




