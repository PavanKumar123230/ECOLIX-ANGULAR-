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
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { ReportComponent } from './Components/report/report.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { AddPackageComponent } from './admin/add-package/add-package.component';
import { AddProductsComponent } from './admin/add-products/add-products.component';
import { TodayActiveUsersComponent } from './admin/today-active-users/today-active-users.component';
import { TotalUsersDataComponent } from './admin/total-users-data/total-users-data.component';
import { TotalActiveUsersComponent } from './admin/total-active-users/total-active-users.component';
import { UpgradeUsersComponent } from './admin/upgrade-users/upgrade-users.component';
import { TransferWallettoUserComponent } from './admin/transfer-walletto-user/transfer-walletto-user.component';
import { RankUsersDataComponent } from './admin/rank-users-data/rank-users-data.component';
import { SilverCaderUsersComponent } from './admin/silver-cader-users/silver-cader-users.component';
import { GoldCaderUsersComponent } from './admin/gold-cader-users/gold-cader-users.component';
import { DiamondCaderUsersComponent } from './admin/diamond-cader-users/diamond-cader-users.component';
import { WithdrawUsersListComponent } from './admin/withdraw-users-list/withdraw-users-list.component';
import { AdminProfileComponent } from './admin/admin-profile/admin-profile.component';
import { SilverManagersDataComponent } from './Components/silver-managers-data/silver-managers-data.component';
import { GoldManagersDataComponent } from './Components/gold-managers-data/gold-managers-data.component';
import { DiamondManagersDataComponent } from './Components/diamond-managers-data/diamond-managers-data.component';
import { AdminRegisterUserComponent } from './admin/admin-register-user/admin-register-user.component';
import { BannerComponent } from './admin/banner/banner.component';

const routes: Routes = [
  // Public routes
  { path: '', component: HomeComponent },
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
      { path: 'home', component: HomeComponent },
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
      { path: 'report', component: ReportComponent },
      { path: 'profile', component: ProfileComponent },


       { path: 'silvermanager', component: SilverManagersDataComponent },
        { path: 'goldmanager', component: GoldManagersDataComponent },
         { path: 'diamondmanager', component: DiamondManagersDataComponent },
    ]
  },

  // ✅ Admin Dashboard
{
  path: '', 
  component: AdminLayoutComponent,
  canActivate: [AuthGuard],
  data: { roles: ['admin'] },
  children: [
    { path: 'adashboard', component: AdashboardComponent },  
    { path: 'addpackage', component: AddPackageComponent },  
    { path: 'addproduct', component: AddProductsComponent }, 
    { path: 'todayactive', component: TodayActiveUsersComponent }, 
    { path: 'totalusers', component: TotalUsersDataComponent },
    { path: 'totalactiveusers', component: TotalActiveUsersComponent },
    { path: 'upgradeusers', component: UpgradeUsersComponent },
    { path: 'transfertouser', component: TransferWallettoUserComponent },
    { path: 'rankwiseusers', component: RankUsersDataComponent },
    { path: 'silvercaderusers', component: SilverCaderUsersComponent },
    { path: 'goldcaderusers', component: GoldCaderUsersComponent },
    { path: 'diamondcaderusers', component: DiamondCaderUsersComponent },
    { path: 'withdrawusers', component: WithdrawUsersListComponent },
    { path: 'aprofile', component: AdminProfileComponent }, 
      { path: 'adminregister', component: AdminRegisterUserComponent },      
      { path: 'banner', component: BannerComponent },      


  ]
},
  // ✅ Admin Dashboard Layout
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    data: { roles: ['admin'] },
    children: [
      { path: 'adashboard', component: AdashboardComponent },
    ]
  },

  // Wildcard route
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
