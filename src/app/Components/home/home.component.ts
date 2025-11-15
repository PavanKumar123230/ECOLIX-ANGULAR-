import { Component, AfterViewInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { AdminService } from 'src/app/service/admin.service';
declare const Swiper: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements  AfterViewInit {
  banners: any[] = [];
  constructor(private api: UserService,private admin:AdminService) {}


  ngAfterViewInit(): void {
    new Swiper('.latest-news-swiper', {
      slidesPerView: 4,
      spaceBetween: 20,
      loop: false,
      navigation: {
        nextEl: '#news-next',
        prevEl: '#news-prev',
      },
      breakpoints: {
        0: { slidesPerView: 1, spaceBetween: 12 },
        576: { slidesPerView: 2, spaceBetween: 16 },
        768: { slidesPerView: 3, spaceBetween: 18 },
        1200: { slidesPerView: 4, spaceBetween: 20 }
      },
      grabCursor: true,
    });
  }
  ngOnInit(): void {
    this.GetallProduct();
    this.GetBanner();
  }

  GetallProduct() {
    this.api.getProduct().subscribe({
      next: (res: any) => {
        console.log('allproduct:', res);
      },
      error: (err) => {
        console.error('Error fetching home data:', err);
      },
    });
 
}


GetBanner() {
  debugger;
  this.admin.getBanner().subscribe({
    next: (res: any) => {
      console.log('allbanner', res);
    this.banners=res.data
    },
    error: (err) => {
      console.error('Error fetching home data:', err);
    },
  });

}




}

