import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';
import { FormBuilder, FormGroup } from '@angular/forms';

declare var bootstrap: any;

@Component({
  selector: 'app-today-active-users',
  templateUrl: './today-active-users.component.html',
  styleUrls: ['./today-active-users.component.scss']
})
export class TodayActiveUsersComponent implements OnInit {
  loading = false;
  activeUsers: any[] = [];
  joinUsers: any[] = [];
  activeTab: 'active' | 'join' = 'active';

  editForm!: FormGroup;
  selectedUser: any = null;
  modalRef: any;

  constructor(private adminService: AdminService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loadTodayActive();
    this.loadTodayJoin();
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

  // ✅ Today Active Users
  loadTodayActive() {
    this.loading = true;
    this.adminService.GetTodayActiveUsers().subscribe({
      next: (res: any) => {
        this.activeUsers = res.data || res;
        this.loading = false;
      },
      error: () => (this.loading = false)
    });
  }

  // ✅ Today Join Users
  loadTodayJoin() {
    this.loading = true;
    this.adminService.GetTodayJoinUsers().subscribe({
      next: (res: any) => {
        this.joinUsers = res.data || res;
        this.loading = false;
      },
      error: () => (this.loading = false)
    });
  }

  // ✅ Switch Tabs
  switchTab(tab: 'active' | 'join') {
    this.activeTab = tab;
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
      next: (res) => {
        alert('✅ User profile updated successfully!');
        this.modalRef.hide();
        this.loadTodayActive();
        this.loadTodayJoin();
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
        this.loadTodayActive();
        this.loadTodayJoin();
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
        this.loadTodayActive();
        this.loadTodayJoin();
      },
      error: () => alert('❌ Failed to unblock user!')
    });
  }
}
