import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCollectionComponent } from './modules/lists/components/list-collection/list-collection.component';
import { ListDetailsComponent } from './modules/lists/components/list-details/list-details.component';

const routes: Routes = [
  { path: '', component: ListCollectionComponent },
  { path: 'lists', component: ListCollectionComponent },
  { path: 'lists/:id', component: ListDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
