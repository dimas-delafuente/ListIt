import { Component, Input, OnInit } from '@angular/core';
import { List } from './../../../../shared/entities/lists/list.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.less']
})
export class ListItemComponent implements OnInit {
  @Input() listItem: List | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
