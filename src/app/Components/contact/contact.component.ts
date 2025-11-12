import { Component, OnInit } from '@angular/core';
declare var AOS: any;
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{
    ngOnInit(): void {
      AOS.init({ duration: 1000, once: true });
    }
  
    submitForm(form: any) {
      if (form.valid) {
        alert('✅ Thank you for contacting Ecolix Pvt. Ltd.!');
        form.reset();
      }
    }
  }
  