import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SparklineRowComponent } from './sparkline-row.component';

describe('SparklineRowComponent', () => {
  let component: SparklineRowComponent;
  let fixture: ComponentFixture<SparklineRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SparklineRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SparklineRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
