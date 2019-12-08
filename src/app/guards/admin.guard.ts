import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanLoad,
  Route,
  UrlSegment,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { AuthService, IUser } from '../services/auth.service';
import { switchMap, catchError, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate, CanLoad {
  constructor(private auth: AuthService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.auth.user.pipe(
      switchMap((user: IUser) => {
        if (user && user.uid === 'aF3hVq7ZOdPmGGQfrsGEInFWakl1') {
          return of(true);
        } else {
          return of(false);
        }
      })
    );
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.auth.user.pipe(
      take(1),
      switchMap((user: IUser) => {
        if (user && user.uid === 'aF3hVq7ZOdPmGGQfrsGEInFWakl1') {
          return of(true);
        } else {
          return of(false);
        }
      })
    );
  }
}
