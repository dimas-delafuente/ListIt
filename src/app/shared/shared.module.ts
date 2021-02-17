// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
// Material
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {DragDropModule} from '@angular/cdk/drag-drop';
// Components
import { AppShellComponent } from './components/app-shell/app-shell.component';
import { SidenavListComponent } from './components/sidenav-list/sidenav-list.component';

@NgModule({
    declarations: [
        AppShellComponent,
        SidenavListComponent
    ],
    imports: [
      CommonModule,
      RouterModule,
      FormsModule,
      MatSidenavModule,
      MatToolbarModule,
      MatIconModule,
      MatButtonModule,
      MatListModule,
      MatCardModule,
      MatMenuModule,
      MatDialogModule,
      MatInputModule,
      DragDropModule
    ],
    exports: [
      CommonModule,
      FormsModule,
      MatSidenavModule,
      MatToolbarModule,
      MatIconModule,
      MatButtonModule,
      MatListModule,
      MatCardModule,
      MatMenuModule,
      MatDialogModule,
      MatInputModule,
      DragDropModule,
      AppShellComponent,
      SidenavListComponent
    ],
    providers: [],
  })
export class SharedModule {}
