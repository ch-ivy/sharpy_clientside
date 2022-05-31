import { WeekDay } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales-chart',
  templateUrl: './sales-chart.component.html',
  styleUrls: ['./sales-chart.component.scss'],
})
export class SalesChartComponent implements OnInit {
  toggle_time: string = 'week';
  constructor() {}

  ngOnInit(): void {}
}
