import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthenticateService } from './authenticate.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate{

  constructor(private _authService:AuthenticateService, private _routService:Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean 
  {
    console.log(state.url);
    
      if(this._authService.authenticated)
        return true;
      else{
        this._authService.redirectUrl=state.url;
        this._routService.navigate(['userlogin']);
        return false;
      }

  }
}
