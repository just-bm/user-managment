import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormService, FormData } from '../services/form.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: FormData[] = [];
  loading = true;
  error = false;

  constructor(private formService: FormService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.loading = true;
    this.formService.getAllForms().subscribe({
      next: (data) => {
        this.users = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching users:', err);
        this.error = true;
        this.loading = false;
      }
    });
  }
}