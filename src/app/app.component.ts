import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { UIHelperService } from './landing-page/ui-helper.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  isNavHidden = false;

  constructor(
    private router: Router,
    private uiHelperService: UIHelperService
  ) {}

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const signInRoute = '/sign-in';   
        const navShownRoutes = ['/', signInRoute];

        if (!navShownRoutes.includes(window.location.pathname)) {
          this.isNavHidden = true;
        } else {
          this.isNavHidden = false;
        }

        if(window.location.pathname === signInRoute) {
          this.uiHelperService.setNavHaveItems(false);
        } else {
          this.uiHelperService.setNavHaveItems(true);
        }
      });
  }
}
