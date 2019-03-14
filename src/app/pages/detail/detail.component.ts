import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/reducers';
import { selectRepoDetail } from '../../store/selectors';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { map, switchMap } from 'rxjs/operators';
import { removeRepo, saveRepo } from '../../store/actions';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  index$: Observable<number>;
  repo$: Observable<any>;

  constructor(private store: Store<AppState>, private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.index$ = this.route.params.pipe(
      map(({ index }) => Number(index))
    );

    this.repo$ = this.index$.pipe(
      switchMap(index => this.store.select(selectRepoDetail, index)),
    );
  }

  back() {
    this.location.back();
  }

  save(index: number) {
    this.store.dispatch(saveRepo({ index }));
  }

  remove(index: number) {
    this.store.dispatch(removeRepo({ index }));
  }
}
