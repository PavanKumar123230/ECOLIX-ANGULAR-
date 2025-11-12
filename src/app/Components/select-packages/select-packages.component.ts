import { Component } from '@angular/core';

@Component({
  selector: 'app-select-packages',
  templateUrl: './select-packages.component.html',
  styleUrls: ['./select-packages.component.scss']
})
export class SelectPackagesComponent {
  selectedPackage: string = '';
  selectedProduct: any = null; // 👈 holds clicked product

  packages = [
    { name: 'Silver' },
    { name: 'Gold' },
    { name: 'Diamond' }
  ];

  silverProducts = [
    { name: 'Herbal Tea', image: 'https://5.imimg.com/data5/SELLER/Default/2024/4/411336177/VH/QB/OW/1473185/green-herbal-tea-500x500.jpg', price: 299, offerPrice: 199 },
    { name: 'Aloe Vera Gel', image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600', price: 349, offerPrice: 249 },
    { name: 'Neem Soap', image: 'https://via.placeholder.com/250x180?text=Neem+Soap', price: 199, offerPrice: 129 },
    { name: 'Honey Pack', image: 'https://via.placeholder.com/250x180?text=Honey+Pack', price: 399, offerPrice: 279 }
  ];

  goldProducts = [
    { name: 'Herbal Shampoo', image: 'https://via.placeholder.com/250x180?text=Herbal+Shampoo', price: 399, offerPrice: 279 },
    { name: 'Turmeric Cream', image: 'https://via.placeholder.com/250x180?text=Turmeric+Cream', price: 299, offerPrice: 199 },
    { name: 'Essential Oil', image: 'https://via.placeholder.com/250x180?text=Essential+Oil', price: 499, offerPrice: 349 },
    { name: 'Green Coffee', image: 'https://via.placeholder.com/250x180?text=Green+Coffee', price: 599, offerPrice: 399 }
  ];

  diamondProducts = [
    { name: 'Luxury Honey Pack', image: 'https://via.placeholder.com/250x180?text=Luxury+Honey', price: 699, offerPrice: 499 },
    { name: 'Royal Herbal Oil', image: 'https://via.placeholder.com/250x180?text=Royal+Herbal+Oil', price: 899, offerPrice: 699 },
    { name: 'Diamond Glow Cream', image: 'https://via.placeholder.com/250x180?text=Diamond+Glow+Cream', price: 999, offerPrice: 799 },
    { name: 'Premium Green Tea', image: 'https://via.placeholder.com/250x180?text=Premium+Green+Tea', price: 899, offerPrice: 699 }
  ];

  get selectedProducts() {
    if (this.selectedPackage === 'Silver') return this.silverProducts;
    if (this.selectedPackage === 'Gold') return this.goldProducts;
    if (this.selectedPackage === 'Diamond') return this.diamondProducts;
    return [];
  }

  openProductModal(product: any) {
    this.selectedProduct = product;
    const modal = document.getElementById('productModal');
    if (modal) {
      (modal as any).style.display = 'block';
      modal.classList.add('show');
    }
  }

  closeModal() {
    const modal = document.getElementById('productModal');
    if (modal) {
      (modal as any).style.display = 'none';
      modal.classList.remove('show');
    }
  }
}
