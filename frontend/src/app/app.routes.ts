import { Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { UserListComponent } from './user-list/user-list.component';

export const routes: Routes = [
  { path: '', component: FormComponent },
  { path: 'users', component: UserListComponent }
];
