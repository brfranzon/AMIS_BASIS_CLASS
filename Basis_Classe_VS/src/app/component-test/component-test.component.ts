import { Component, ContentChild, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { TVsViewDataList } from '../TVsViewDataList/TVsViewDataList.component';

@Component({
  selector: 'component-test',
  templateUrl: './component-test.component.html',
  styleUrls: ['./component-test.component.css']
})
export class ComponentTestComponent extends TVsViewDataList implements OnInit {

  constructor() { 
    super(); 
  }

  @Input() property: any;
  @Input() Childtemplate: any;

  ngOnInit(): void {
  }

}
