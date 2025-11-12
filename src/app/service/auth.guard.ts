import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private tokenStorageService: TokenStorageService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const currentUser = this.tokenStorageService.getUser();

    // ✅ Not logged in
    if (!currentUser) {
      console.log('User not logged in. Redirecting to login...');
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
      return false;
    }

    // ✅ Role-based route protection
    const allowedRoles = route.data['roles'];
    if (allowedRoles && !allowedRoles.includes(currentUser.usertype)) {
      console.warn('Unauthorized access attempt detected!');
      // Redirect to proper dashboard
      if (currentUser.usertype === 'admin') {
        this.router.navigate(['/adashboard']);
      } else {
        this.router.navigate(['/dashboard']);
      }
      if (currentUser.usertype === 'user') {
        this.router.navigate(['/home']);
      }
      

      return false;
    }

    // ✅ Authorized
    return true;
  }
}
