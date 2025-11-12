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
import { LoginComponent } from './Components/login/login.component';
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




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutusComponent,
    ProductComponent,
    SignUpComponent,
    LoginComponent,
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
