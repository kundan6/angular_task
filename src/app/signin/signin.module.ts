import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { SigninRoutingModule } from './signin/signin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SigninComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SigninRoutingModule
  ]
})
export class SigninModule { }
