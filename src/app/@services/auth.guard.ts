import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { map, tap,take } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(){
    if (this.auth.authenticated){ return true; }
      this.router.navigate(['manage']);
    
      return false
  }
  
  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean> | boolean {
  //     if (this.auth.authenticated) { return true; }

  //     return this.auth.currentUserObservable
  //       .take(1).pipe(
  //       map(user => !!user),
  //       tap((loggedIn: boolean) => {
  //         if (!loggedIn) {
  //           console.log("access denied")
  //           this.router.navigate(['/dashboard']);
  //         }
  //       }))
  //   }
}
