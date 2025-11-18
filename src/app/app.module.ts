import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { AboutusComponent } from './Components/aboutus/aboutus.component';
import { ProductComponent } from './Components/product/product.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { ProductDeatilsComponent } from './Components/product-deatils/product-deatils.component';
import { ContactComponent } from './Components/contact/contact.component';
import { FormsModule } from '@angular/forms';
import { AddToCartComponent } from './Components/add-to-cart/add-to-cart.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { DashboardHeaderComponent } from './Components/dashboard-header/dashboard-header.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { SelectPackagesComponent } from './Components/select-packages/select-packages.component';
import { DashboardLayoutComponent } from './Components/dashboard-layout/dashboard-layout.component';
import { TransferFundComponent } from './Components/transfer-fund/transfer-fund.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReceivedFundComponent } from './Components/received-fund/received-fund.component';
import { MyUserComponent } from './Components/my-user/my-user.component';
import { WelcomeBonusComponent } from './Components/welcome-bonus/welcome-bonus.component';
import { SilverIncomeComponent } from './Components/silver-income/silver-income.component';
import { GoldIncomeComponent } from './Components/gold-income/gold-income.component';
import { DiamondIncomeComponent } from './Components/diamond-income/diamond-income.component';
import { WalletComponent } from './Components/wallet/wallet.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { HttpClientModule } from '@angular/common/http';
import { AdashboardComponent } from './admin/adashboard/adashboard.component';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
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
import { LoginComponent } from './Components/login/login.component';
import { ReportComponent } from './Components/report/report.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { SilverManagersDataComponent } from './Components/silver-managers-data/silver-managers-data.component';
import { GoldManagersDataComponent } from './Components/gold-managers-data/gold-managers-data.component';
import { DiamondManagersDataComponent } from './Components/diamond-managers-data/diamond-managers-data.component';
import { AdminRegisterUserComponent } from './admin/admin-register-user/admin-register-user.component';
import { BannerComponent } from './admin/banner/banner.component';
import { SupportComponent } from './Components/support/support.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutusComponent,
    ProductComponent,
    SignUpComponent,
    ProductDeatilsComponent,
    ContactComponent,
    AddToCartComponent,
    DashboardComponent,
    DashboardHeaderComponent,
    SidebarComponent,
    SelectPackagesComponent,
    DashboardLayoutComponent,
    TransferFundComponent,
    ReceivedFundComponent,
    MyUserComponent,
    WelcomeBonusComponent,
    SilverIncomeComponent,
    GoldIncomeComponent,
    DiamondIncomeComponent,
    WalletComponent,
    AdminLoginComponent,
    AdashboardComponent,
    AdminLayoutComponent,
    AddPackageComponent,
    AddProductsComponent,
    TodayActiveUsersComponent,
    TotalUsersDataComponent,
    TotalActiveUsersComponent,
    UpgradeUsersComponent,
    TransferWallettoUserComponent,
    RankUsersDataComponent,
    SilverCaderUsersComponent,
    GoldCaderUsersComponent,
    DiamondCaderUsersComponent,
    WithdrawUsersListComponent,
    AdminProfileComponent,
    LoginComponent,
    ReportComponent,
    ProfileComponent,
    SilverManagersDataComponent,
    GoldManagersDataComponent,
    DiamondManagersDataComponent,
    AdminRegisterUserComponent,
    BannerComponent,
    SupportComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
