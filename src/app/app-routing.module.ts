import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyDetailsModule } from './company-details/company-details.module';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path : '' , component :  HomeComponent},
  { path : 'nav' ,  component :  NavComponent},
  { path : 'company-details' ,  loadChildren : () => import('./company-details/company-details.module').then(m => m.CompanyDetailsModule)},
  { path : 'register' ,canActivate : [AuthGuard] ,component :  RegisterComponent},
  { path : 'not-found' , component :  NotFoundComponent},
  { path : '**' , component :  NotFoundComponent , pathMatch : 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
