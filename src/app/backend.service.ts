import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor() { }

  IsAuthenticated(): boolean {
  
    if (localStorage.getItem('loginuser'))     
      return true;
     else 
      return false;      
    }

  }

