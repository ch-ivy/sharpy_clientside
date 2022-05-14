import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-collection-details',
  templateUrl: './collection-details.component.html',
  styleUrls: ['./collection-details.component.scss'],
})
export class CollectionDetailsComponent implements OnInit {
  constructor(public ms: NgbActiveModal) {}

  ngOnInit(): void {}
}
