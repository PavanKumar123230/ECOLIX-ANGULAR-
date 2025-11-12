// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class SidebarService {

//   constructor() { }


//   isOpen = false;

//   toggleSidebar() {
//     this.isOpen = !this.isOpen;
//   }
// }

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  isOpen: boolean = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  closeSidebar() {
    this.isOpen = false;
  }

  openSidebar() {
    this.isOpen = true;
  }
}
