/**
 * Very simple component that renders a list of people
 */

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'menu-list',
  templateUrl: './menu-list.component.html'
})
export class MenuListComponent {
  @Input() menuItems;
  @Output() onMenuChoice = new EventEmitter<any>();
}
