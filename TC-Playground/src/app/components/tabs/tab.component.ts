/**
 * A single tab page. It renders the passed template
 * via the @Input properties by using the ngTemplateOutlet
 * and ngTemplateOutletContext directives.
 */

import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-tab',
  styles: [
    `
      .pane {
        padding: 2em;
      }
    `,
  ],
  templateUrl: './tab.component.html',
})

export class TabComponent {
  @Input('tabTitle') title: string;
  @Input() active = false;
  @Input() isCloseable = false;
  @Input() template;
  @Input() dataContext;
  
  @Input() instance; 
  // pkValue
}
