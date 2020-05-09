import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthService} from './auth.service'
import { from } from 'rxjs';
const routes: Routes = [
  { path: 'home', canActivate:[AuthService], loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'signup', loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule) },
{ path: 'signin',  loadChildren: () => import('./signin/signin.module').then(m => m.SigninModule) },
{ path: 'dashboard', canActivate:[AuthService], loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
{  
  path: '',
  redirectTo: '/signin',
  pathMatch: 'full'
},
{ path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
