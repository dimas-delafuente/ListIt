// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Material
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';

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
      MatSidenavModule,
      MatToolbarModule,
      MatIconModule,
      MatButtonModule,
      MatListModule,
      MatCardModule
    ],
    exports: [
      CommonModule,
      MatSidenavModule,
      MatToolbarModule,
      MatIconModule,
      MatButtonModule,
      MatListModule,
      MatCardModule,
      AppShellComponent,
      SidenavListComponent
    ],
    providers: [],
  })
export class SharedModule {}
