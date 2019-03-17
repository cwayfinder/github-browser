import { Component, OnInit } from '@angular/core';
import { AppState } from '../../store/reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectRepos } from '../../store/selectors';
import { ViewportScroller } from '@angular/common';
import { Router, Scroll } from '@angular/router';
import { delay, filter, switchMapTo } from 'rxjs/operators';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss']
})
export class TrendingComponent implements OnInit {

  repos$: Observable<any[]>;

  constructor(private store: Store<AppState>, private router: Router, private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {
    this.repos$ = this.store.select(selectRepos);

    this.repos$
      .pipe(
        switchMapTo(this.router.events),
        filter(e => e instanceof Scroll),
        delay(0))
      .subscribe((e: Scroll) => {
        if (e.position) {
          this.viewportScroller.scrollToPosition(e.position);
        } else {
          this.viewportScroller.scrollToPosition([0, 0]);
        }
      });
  }

}
