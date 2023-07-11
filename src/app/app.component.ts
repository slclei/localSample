import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'localSample';
  componentInRouter: any;
  
  constructor(private router: Router) {
    // Needed so pages will reload paramters on the same page.
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }

  public onRouterOutletActivate(event: any): void {
    this.componentInRouter = event;
  }
}
