import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { ListService } from './../../../../services/lists/list.service';
import { State } from '././../../../../state/stateDefinition';
import { selectLists } from './../../../../state/lists/selectors';
import { List } from './../../../../shared/entities/lists/list.model';
import { ListActionTypes } from 'src/app/state/lists/actions';

@Component({
  selector: 'app-list-collection',
  templateUrl: './list-collection.component.html',
  styleUrls: ['./list-collection.component.less']
})
export class ListCollectionComponent implements OnInit, OnDestroy {
  public listCollection: Array<List> | undefined;
  public totalLists = 0;

  private subscriptions: Subscription[] = [];


  constructor(private store: Store<State>,
              private listService: ListService) { }

  ngOnInit(): void {
    this.getListCollection();
    this.subscribeToStateChange();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  private subscribeToStateChange(): void {
    this.subscriptions.push(this.store.select(selectLists).subscribe(l => {
      this.totalLists = l.length;
      this.listCollection = l;
    }));
  }

  private getListCollection(): void {
    this.dispatchStoreLoadActions();
    // this.subscriptions.push(
    //   this.listService.getAll().subscribe(listCollection => {
    //     this.listCollection = listCollection;
    //     this.dispatchStoreLoadActions(listCollection);
    //   })
    // );
  }

  private dispatchStoreLoadActions(): void {
    this.store.dispatch({
      type: ListActionTypes.LOAD
    });
  }

}
