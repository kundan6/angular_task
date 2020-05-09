import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr'

 @Component({
   selector: 'app-signin',
   templateUrl: './signin.component.html',
   styleUrls: ['./signin.component.css']
 })

export class SigninComponent implements OnInit {
    loginForm: FormGroup;
    login_user:string;
    loading = false;
    submitted = false;
    returnUrl: string;
    Validuser=[];  
    constructor(
      private toastr: ToastrService,
        private formBuilder: FormBuilder,
       
        private router: Router,       
        ) {}

    ngOnInit() {
        this.Validuser = JSON.parse(localStorage.getItem('currentUser'));
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required,]
        });
        console.log(this.f.username.value);
       
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;
          // alert();
        // stop here if form is invalid
         if (this.loginForm.invalid) {
          this.toastr.error('Invalid Crendentials');
              return false;
         }
         else
         {

            for (var i in this.Validuser) {
                if ((this.Validuser[i].username == this.f.username.value)&&(this.Validuser[i].password==this.f.password.value)) {
                  this.login_user= this.f.username.value;
                  localStorage.setItem('loginuser', this.login_user);
                  this.toastr.success('Successfully Login');
                  this.router.navigate(['/dashboard']);
                  return false;
                }
                else 
                console.log("invalid");
                this.toastr.error('Invalid Credential');  
              }
}

}
}