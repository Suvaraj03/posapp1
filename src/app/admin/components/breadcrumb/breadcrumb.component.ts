import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, RouterLink } from '@angular/router';
import { filter } from 'rxjs/operators';
import { BreadcrumbService } from './breadcrumb.service';


@Component({
  selector: 'app-breadcrumb',
  imports: [RouterLink,CommonModule],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.css'
})


export class BreadcrumbComponent implements OnInit {
  breadcrumbs: Array<{ label: string, url: string }> = [];

  constructor(private breadcrumbService: BreadcrumbService) {}

  ngOnInit() {
    this.breadcrumbService.breadcrumbs$.subscribe(breadcrumbs => {
      this.breadcrumbs = breadcrumbs;
    });
  }
}