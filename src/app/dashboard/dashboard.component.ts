import { Component , ViewEncapsulation} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../layout/sidebar/sidebar.component'; // ✅ adjust path if needed
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    SidebarComponent  // ✅ register it here
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class DashboardComponent {}
