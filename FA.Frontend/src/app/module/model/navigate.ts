import { isPlatformBrowser } from "@angular/common";
import { Inject, Injectable, PLATFORM_ID } from "@angular/core";
import { Params, Router, RouterLink } from "@angular/router";

export class NavigatenModel {
  constructor( private _router: Router, @Inject(PLATFORM_ID) private platformId: Object ) {}

  navigateToPage(routerPath: string, queryParams?: Params): void {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      this._router.navigate([routerPath], { queryParams: queryParams });
    }
  }

  navigateToElement(id: string): void {
    if (isPlatformBrowser(this.platformId)) {
      let eleInfoRect = document.getElementById(id)?.getBoundingClientRect();

      window.scrollTo({
        top: eleInfoRect?.x,
        behavior: 'smooth'
      });
    }
  }
}
