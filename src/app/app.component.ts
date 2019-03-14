import { Component, OnInit } from '@angular/core';
import { AppState } from './store/reducers';
import { Store } from '@ngrx/store';
import { selectSavedCount } from './store/selectors';
import { Observable } from 'rxjs';
import { loadRepos } from './store/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  savedCount$: Observable<number>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(loadRepos);
    this.savedCount$ = this.store.select(selectSavedCount);
  }
}
