import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { List } from './../../../../shared/entities/lists/list.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.less']
})
export class ListItemComponent implements OnInit {
  @Input() listItem!: List;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }

  public openListDetails(): void {
    this.router.navigate([this.listItem.id], { relativeTo: this.route });
  }
}
