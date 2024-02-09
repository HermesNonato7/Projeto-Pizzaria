import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CustomerService } from '../../services/customer.service';

@Injectable({
  providedIn: 'root'
})
export class PodeAtivarGuard implements CanActivate {
  
  constructor(private router: Router, private customerService: CustomerService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     
      if(route.params['usuario'] === 'marcos' && route.params['senha'] === '123') {
        return true;
      }
      this.router.navigate(["/"]);
      return false;
  }
  
}
