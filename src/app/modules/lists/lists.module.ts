import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';
import { ListCollectionComponent } from './components/list-collection/list-collection.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { NewListDialogComponent } from './components/new-list-dialog/new-list-dialog.component';
import { ListDetailsComponent } from './components/list-details/list-details.component';

@NgModule({
    declarations: [
        ListCollectionComponent,
        ListItemComponent,
        NewListDialogComponent,
        ListDetailsComponent,
    ],
    entryComponents: [
        NewListDialogComponent
    ],
    imports: [
        SharedModule
    ],
    exports: [
        ListCollectionComponent
    ],
    providers: [],
  })
export class ListModule {}
