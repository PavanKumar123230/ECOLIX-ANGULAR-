import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutusComponent } from './Components/aboutus/aboutus.component';
import { ProductComponent } from './Components/product/product.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { LoginComponent } from './Components/login/login.component';
import { ProductDeatilsComponent } from './Components/product-deatils/product-deatils.component';
import { ContactComponent } from './Components/contact/contact.component';
import { DashboardLayoutComponent } from './Components/dashboard-layout/dashboard-layout.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { SelectPackagesComponent } from './Components/select-packages/select-packages.component';
import { TransferFundComponent } from './Components/transfer-fund/transfer-fund.component';
import { ReceivedFundComponent } from './Components/received-fund/received-fund.component';
import { MyUserComponent } from './Components/my-user/my-user.component';
import { WelcomeBonusComponent } from './Components/welcome-bonus/welcome-bonus.component';
import { SilverIncomeComponent } from './Components/silver-income/silver-income.component';
import { GoldIncomeComponent } from './Components/gold-income/gold-income.component';
import { DiamondIncomeComponent } from './Components/diamond-income/diamond-income.component';
import { WalletComponent } from './Components/wallet/wallet.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdashboardComponent } from './admin/adashboard/adashboard.component';
import { AuthGuard } from './service/auth.guard';

const routes: Routes = [
  // Public routes
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'product', component: ProductComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'product-details', component: ProductDeatilsComponent },
  { path: 'contact-us', component: ContactComponent },
  { path: 'adminlogin', component: AdminLoginComponent },

  // ✅ User Dashboard Layout
  {
    path: '',
    component: DashboardLayoutComponent,
    canActivate: [AuthGuard],
    data: { roles: ['user'] },
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'packages', component: SelectPackagesComponent },
      { path: 'transferfund', component: TransferFundComponent },
      { path: 'receivedfund', component: ReceivedFundComponent },
      { path: 'my-user', component: MyUserComponent },
      { path: 'welcome-bonus', component: WelcomeBonusComponent },
      { path: 'silver', component: SilverIncomeComponent },
      { path: 'gold', component: GoldIncomeComponent },
      { path: 'diamond', component: DiamondIncomeComponent },
      { path: 'wallet', component: WalletComponent },
    ]
  },

  // ✅ Admin Dashboard
  {
    path: '',
    canActivate: [AuthGuard],
    data: { roles: ['admin'] },
    children: [
      { path: 'adashboard', component: AdashboardComponent }
    ]
  },

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
