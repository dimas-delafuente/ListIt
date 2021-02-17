import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { List } from './../../../../shared/entities/lists/list.model';

@Component({
  selector: 'app-new-list-dialog',
  templateUrl: './new-list-dialog.component.html',
  styleUrls: ['./new-list-dialog.component.less']
})
export class NewListDialogComponent implements OnInit {
  public list = {
    id: '',
    name: '',
    description: ''
  };
  constructor(public dialogRef: MatDialogRef<NewListDialogComponent>) { }

  ngOnInit(): void {
  }

}
