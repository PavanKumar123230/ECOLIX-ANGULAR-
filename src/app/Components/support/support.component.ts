import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/service/user.service'; 

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit {

  supportForm!: FormGroup;
  supportList: any[] = [];

  constructor(private fb: FormBuilder, private api: UserService) {}

  ngOnInit() {
    this.supportForm = this.fb.group({
      subject: [''],
      query: ['']
    });

    this.loadSupportTickets();
  }

  submitSupport() {
    this.api.support(this.supportForm.value).subscribe((res:any) => {
      alert('Support ticket submitted successfully');
      this.supportForm.reset();
      this.loadSupportTickets();
    });
  }

  loadSupportTickets() {
    this.api.getSupport().subscribe((res:any) => {
      this.supportList = res.data || [];
      console.log("support",this.supportList)
    });
  }
}
