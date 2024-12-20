import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {

  // Explicitly defining the type of the BehaviorSubject
  breadcrumbs$: BehaviorSubject<Array<{ label: string, url: string }>> = new BehaviorSubject<{ label: string, url: string }[]>([]);

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    // Listening for route changes and updating breadcrumbs
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.breadcrumbs$.next(this.createBreadcrumbs(this.activatedRoute.root));
    });
  }

  // Recursive method to create breadcrumb data
  private createBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: Array<{ label: string, url: string }> = []): Array<{ label: string, url: string }> {
    const children: ActivatedRoute[] = route.children;

    if (children.length === 0) {
      return breadcrumbs;
    }

    for (const child of children) {
      const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');
      if (routeURL !== '') {
        url += `/${routeURL}`;
        breadcrumbs.push({ label: child.snapshot.data['breadcrumb'], url: url });
      }
      return this.createBreadcrumbs(child, url, breadcrumbs);
    }
    return breadcrumbs;
  }
}
