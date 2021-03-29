import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CompanyDetailsComponent } from './company-details.component';
import { AuthGuard } from '../guards/auth.guard';


const shoppingRoutes: Routes = [
    { path : '', canActivate : [AuthGuard] ,component :  CompanyDetailsComponent},
]

@NgModule({
  declarations: [
    CompanyDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(shoppingRoutes),
  ]
})
export class CompanyDetailsModule { }
