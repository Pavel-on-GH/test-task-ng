import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './Pages/users/profile/profile.component';
import { UserListComponent } from './Pages/users/user-list/user-list.component';
import { SignupComponent } from './Pages/users/signup/signup.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/user-list',
    pathMatch: 'full',
    title: 'Angular CRUD application',
  },
  { path: 'signup', component: SignupComponent, title: 'Register' },
  { path: 'profile/:id', component: ProfileComponent, title: 'Edit employee' },
  { path: 'user-list', component: UserListComponent, title: 'User List' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
