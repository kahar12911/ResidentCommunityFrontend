import { Component, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  imports: [RouterModule]
})
export class SidebarComponent {
  communityOpen = false;
  paymentsOpen = false;

  constructor(public router: Router, private cdr: ChangeDetectorRef) {}

  toggleCommunity() {
    this.communityOpen = !this.communityOpen;
    this.cdr.detectChanges(); // Force Angular to detect changes immediately
  }

  togglePayments() {
    this.paymentsOpen = !this.paymentsOpen;
    this.cdr.detectChanges(); // Force Angular to detect changes immediately
  }

  isRouteActive(routes: string[]): boolean {
    return routes.some(route => this.router.url.includes(route));
  }
}
