import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit {

  supportForm!: FormGroup;
  supportList: any[] = [];

  subjectOptions = [
    { value: 'Payment Issue', label: 'Payment Issue' },
    { value: 'Registration Issue', label: 'Registration Issue' },
    { value: 'Wallet Issue', label: 'Wallet Issue' },
    { value: 'Transfer Issue', label: 'Transfer Issue' },
    { value: 'Other Issue', label: 'Other Issue' }
  ];

  constructor(
    private fb: FormBuilder,
    private api: UserService,
    private toast: ToastrService
  ) {}

  ngOnInit() {
    this.supportForm = this.fb.group({
      subject: ['', Validators.required],
      query: ['', Validators.required]
    });

    this.loadSupportTickets();
  }

  submitSupport() {
    if (this.supportForm.invalid) {
      this.toast.error('Please fill all required fields!', 'Error');
      return;
    }

    this.api.support(this.supportForm.value).subscribe({
      next: (res: any) => {
        this.toast.success('Support ticket submitted successfully!', 'Success');
        this.supportForm.reset();
        this.loadSupportTickets();
      },
      error: () => {
        this.toast.error('Something went wrong, try again!', 'Error');
      }
    });
  }

  loadSupportTickets() {
    this.api.getSupport().subscribe((res: any) => {
      this.supportList = res.data || [];
      console.log("support", this.supportList);
    });
  }
}
