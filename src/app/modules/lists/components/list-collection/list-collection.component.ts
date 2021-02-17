import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { NewListDialogComponent } from '../new-list-dialog/new-list-dialog.component';
import { State } from '././../../../../state/stateDefinition';
import { selectLists } from './../../../../state/lists/selectors';
import { ListActionTypes } from './../../../../state/lists/actions';
import { List } from './../../../../shared/entities/lists/list.model';

@Component({
  selector: 'app-list-collection',
  templateUrl: './list-collection.component.html',
  styleUrls: ['./list-collection.component.less']
})
export class ListCollectionComponent implements OnInit, OnDestroy {
  public listCollection!: List[];
  public totalLists = 0;

  private subscriptions: Subscription[] = [];


  constructor(private store: Store<State>,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getListCollection();
    this.subscribeToStateChange();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  public openNewListDialog(): void {
    const dialogRef = this.dialog.open(NewListDialogComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(newList => {
      if (newList) {
        this.dispatchCreateListAction(newList);
      }
    });
  }

  public drop(event: CdkDragDrop<List[]>): void {
    const arrayForSort = [...this.listCollection];
    moveItemInArray(arrayForSort, event.previousIndex, event.currentIndex);

    this.listCollection = arrayForSort;
  }

  private subscribeToStateChange(): void {
    this.subscriptions.push(this.store.select(selectLists).subscribe(l => {
      this.totalLists = l.length;
      this.listCollection = l;
    }));
  }

  private getListCollection(): void {
    this.dispatchStoreLoadActions();
  }

  private dispatchStoreLoadActions(): void {
    this.store.dispatch({
      type: ListActionTypes.LOAD
    });
  }

  private dispatchCreateListAction(list: List): void {
    this.store.dispatch({
      type: ListActionTypes.CREATE,
      payload: { list }
    });
  }

}
