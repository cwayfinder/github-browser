import { Component, OnInit } from '@angular/core';
import { AppState } from '../../store/reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectRepos } from '../../store/selectors';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss']
})
export class TrendingComponent implements OnInit {

  repos$: Observable<any[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.repos$ = this.store.select(selectRepos);
  }

}
