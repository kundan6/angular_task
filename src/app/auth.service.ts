import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CanActivate } from '@angular/router';
import { BackendService } from './backend.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService  implements CanActivate{

  constructor(private bs:BackendService) { }
  canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    return this.bs.IsAuthenticated();
  }

  

}
