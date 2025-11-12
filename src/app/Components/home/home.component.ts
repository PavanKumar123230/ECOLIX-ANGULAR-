import { Component, AfterViewInit } from '@angular/core';
declare const Swiper: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
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

}
