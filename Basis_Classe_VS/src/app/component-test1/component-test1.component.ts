import { Component, OnInit, Input } from '@angular/core';
import { TVsViewDataList } from '../TVsViewDataList/TVsViewDataList.component';

@Component({
  selector: 'component-test1',
  templateUrl: './component-test1.component.html',
  styleUrls: ['./component-test1.component.css']
})
export class ComponentTest1Component extends TVsViewDataList implements OnInit {

  constructor() {
    super();
   }

   @Input() property: any;
   @Input() Childtemplate: any;

  ngOnInit(): void {
  }

}
