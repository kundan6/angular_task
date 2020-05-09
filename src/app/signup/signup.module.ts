import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { SignupRoutingModule } from './signup/signup-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@NgModule({
  declarations: [SignupComponent],
  imports: [
    CommonModule,
    FormsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    ReactiveFormsModule,
    SignupRoutingModule
  ]
})
export class SignupModule { }
