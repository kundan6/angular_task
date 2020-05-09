import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home/home-routing.module';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,HomeRoutingModule,GooglePlaceModule,FormsModule,ReactiveFormsModule
  ]
})
export class HomeModule { }
