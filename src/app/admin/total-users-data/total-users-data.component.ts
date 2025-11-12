import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';
import { FormBuilder, FormGroup } from '@angular/forms';

declare var bootstrap: any;

@Component({
  selector: 'app-total-users-data',
  templateUrl: './total-users-data.component.html',
  styleUrls: ['./total-users-data.component.scss']
})
export class TotalUsersDataComponent implements OnInit {
  loading = false;
  allUsers: any[] = [];
  editForm!: FormGroup;
  selectedUser: any = null;
  modalRef: any;

  constructor(private adminService: AdminService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loadAllUsers();
    this.createForm();
  }

  createForm() {
    this.editForm = this.fb.group({
      name: [''],
      phone: [''],
      email: [''],
      password: ['']
    });
  }

  // ✅ Load all users
  loadAllUsers() {
    this.loading = true;
    this.adminService.TotalMembers().subscribe({
      next: (res: any) => {
        this.allUsers = res.data || res;
        this.loading = false;
      },
      error: () => (this.loading = false)
    });
  }

  // ✅ Edit User (open modal)
  openEditModal(user: any) {
    this.selectedUser = user;
    this.editForm.patchValue({
      name: user.name,
      phone: user.phone,
      email: user.email,
      password: user.password
    });
    const modalEl = document.getElementById('editUserModal');
    this.modalRef = new bootstrap.Modal(modalEl);
    this.modalRef.show();
  }

  // ✅ Save User Update
  saveProfile() {
    if (!this.selectedUser) return;

    this.adminService.UpdateUserProfile(this.selectedUser.id, this.editForm.value).subscribe({
      next: () => {
        alert('✅ User profile updated successfully!');
        this.modalRef.hide();
        this.loadAllUsers();
      },
      error: (err) => {
        console.error(err);
        alert('❌ Update failed!');
      }
    });
  }

  // ✅ Block User
  blockUser(id: any) {
    if (!confirm('Are you sure you want to block this user?')) return;
    this.adminService.userblock(id).subscribe({
      next: () => {
        alert('🚫 User blocked successfully!');
        this.loadAllUsers();
      },
      error: () => alert('❌ Failed to block user!')
    });
  }

  // ✅ Unblock User
  unblockUser(id: any) {
    if (!confirm('Are you sure you want to unblock this user?')) return;
    this.adminService.userunblock(id).subscribe({
      next: () => {
        alert('✅ User unblocked successfully!');
        this.loadAllUsers();
      },
      error: () => alert('❌ Failed to unblock user!')
    });
  }
}
