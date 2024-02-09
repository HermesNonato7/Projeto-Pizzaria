import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CustomerService } from '../../services/customer.service';

@Injectable({
  providedIn: 'root'
})
export class PodeCarregarGuard implements CanLoad {
  constructor(private router: Router, private customerService: CustomerService){}

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      if(this.customerService.getAutorizado()) {
        return true;
      }   
      this.router.navigate(["/"]);
      return false;
  }
}
