import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';
import { ListCollectionComponent } from './components/list-collection/list-collection.component';
import { ListItemComponent } from './components/list-item/list-item.component';

@NgModule({
    declarations: [
        ListCollectionComponent,
        ListItemComponent,
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