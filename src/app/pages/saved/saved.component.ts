import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/reducers';
import { selectSaved } from '../../store/selectors';
import { removeRepo } from '../../store/actions';

@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.scss']
})
export class SavedComponent implements OnInit {

  repos$: Observable<any[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.repos$ = this.store.select(selectSaved);
  }

  remove(index: number) {
    this.store.dispatch(removeRepo({ index }));
  }
}
