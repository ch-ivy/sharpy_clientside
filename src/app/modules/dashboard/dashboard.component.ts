import { Component, OnInit } from '@angular/core';
import { MediaQueriesService } from 'src/app/services/media-queries.service';
import { RouteLinks } from './routes';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  routes = RouteLinks;
  drawer_class = false;
  constructor(public set: MediaQueriesService) {}

  ngOnInit(): void {}

  toggleSidebar() {
    this.drawer_class = true;
  }
}
