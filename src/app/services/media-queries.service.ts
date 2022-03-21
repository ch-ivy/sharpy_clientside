import { Injectable } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Injectable({
  providedIn: 'root',
})
export class MediaQueriesService {
  constructor(private breakpointObserver: BreakpointObserver) {}

  breakpointMD$: Observable<boolean> = this.breakpointObserver
    .observe([Breakpoints.TabletPortrait, Breakpoints.Handset])
    .pipe(
      map((result) => {
        return result.matches;
      }),
      shareReplay()
    );
}
