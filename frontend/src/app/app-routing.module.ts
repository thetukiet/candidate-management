
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../commons/home/home.component';
import { LoginComponent } from '../commons/user-management/login/login.component';

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

