import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers-card',
  templateUrl: './customers-card.component.html',
  styleUrls: ['./customers-card.component.scss'],
})
export class CustomersCardComponent implements OnInit {
  items = [1, 2, 3, 4];
  constructor() {}

  ngOnInit(): void {}
}
