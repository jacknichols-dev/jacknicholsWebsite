import { Component, ChangeDetectionStrategy } from "@angular/core";
import { AuthService, IUser } from "./services/auth.service";
import { Router, NavigationEnd, ActivatedRoute } from "@angular/router";
import { BehaviorSubject, Observable, of } from "rxjs";
import { switchMap, take } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  showOverlay: Observable<boolean>;

  constructor(public auth: AuthService, public router: Router) {
    this.showOverlay = this.auth.user.pipe(
      switchMap((user: IUser) => {
        if (user && user.uid === "aF3hVq7ZOdPmGGQfrsGEInFWakl1") {
          return of(false);
        } else {
          if (this.router.url === "/login") {
            return of(false);
          } else {
            return of(true);
          }
        }
      })
    );
  }
}
