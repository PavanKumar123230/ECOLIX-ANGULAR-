import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ECO-Lix';
  currentPage: 'public' | 'dashboard' = 'public';

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentPage = event.urlAfterRedirects.includes('dashboard')
          ? 'dashboard'
          : 'public';
      }
    });
  }
}