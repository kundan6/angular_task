import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registerForm: FormGroup;
     user:Array<any>=[];
     users:Array<any>=[];
     loading = false;
     submitted = false;
     returnUrl: string;
    constructor(
        private toastr: ToastrService,
        private formBuilder: FormBuilder,
        private router: Router,
        ) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            username: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }
    get f() { return this.registerForm.controls; }
    
    onSubmit() {
      this.submitted = true;
      //console.log(this.f.username.value);
      if (this.registerForm.invalid) {
        //console.log("not valid");
        this.toastr.error('Please Enter all fields');
        return false;
        
   }
   else
   {
     this.toastr.success('Successfully signup');
      this.submitted = true; 
      this.user=this.registerForm.value;
      this.users.push(this.user);
      console.log(this.users);
      localStorage.setItem('currentUser', JSON.stringify(this.users));
      this.router.navigate(['/signin']);
    }
    //logout() {
      // remove user from local storage to log user out
     // localStorage.removeItem('currentUser');
  //}
}
}
