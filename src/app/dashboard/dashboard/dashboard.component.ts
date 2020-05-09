import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user:string;
  constructor( private router: Router) { }

  ngOnInit() {
    this.user=localStorage.getItem('loginuser');
  }
logout() {
      // remove user from local storage to log user out
      alert();
      localStorage.removeItem('currentUser');
      localStorage.removeItem('loginuser');
      
      this.router.navigate(['/signin']);
  }
}
