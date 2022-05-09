import { nav_items, auth_items } from './../../api/nav';
import { Item } from './../../models/item';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-aside-nav',
  templateUrl: './aside-nav.component.html',
  styleUrls: ['./aside-nav.component.css'],
})
export class AsideNavComponent implements OnInit {
  navs_data: Item[] = nav_items;
  auths_data: Item[] = auth_items;

  @Output() close: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  handleClose() {
    this.close.emit();
  }
}
