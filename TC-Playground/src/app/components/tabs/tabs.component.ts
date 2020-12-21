/**
 * The main component that renders single TabComponent
 * instances.
 */

import {
  Component,
  ContentChildren,
  QueryList,
  AfterContentInit,
  ViewChild,
  ComponentFactoryResolver,
  ViewContainerRef,
  Injectable
} from '@angular/core';

import { TabComponent } from './tab.component';
import { DynamicTabsDirective, mainPlaceholderDirective } from './dynamic-tabs.directive';

@Component({
  selector: 'my-tabs',
  templateUrl: './tabs.component.html',
  styles: [
    `
    .tab-close {
      color: black;
      text-align: right;
      cursor: pointer;
    },
   
  
    `
  ]
})

export class TabsComponent implements AfterContentInit {

  dynamicTabs: TabComponent[] = [];

  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
  @ViewChild(DynamicTabsDirective) dynamicTabPlaceholder: DynamicTabsDirective;
  @ViewChild(mainPlaceholderDirective)  mainPlaceholderDirective: mainPlaceholderDirective;
   /*
    Alternative approach of using an anchor directive
    would be to simply get hold of a template variable
    as follows
  */

  // @ViewChild('container', {read: ViewContainerRef}) dynamicTabPlaceholder;
  constructor(private _componentFactoryResolver: ComponentFactoryResolver) {

  }

  // contentChildren are set
  ngAfterContentInit() {
    // get all active tabs
    const activeTabs = this.tabs.filter(tab => tab.active);

    // if there is no active tab set, activate the first
    if (activeTabs.length === 0  && (this.tabs.length > 0)) {
      this.selectTab(this.tabs.first);
    }
  }

  openTab(title: string, template, data, isCloseable = false, tabTyp?: string) {

    let bOK: boolean = true;
    let selTab: any;

    // console.log('Data...', data.vorfall_nr);
    // console.log('TabTyp', tabTyp);


    for(let i = 0; i < this.dynamicTabs.length; i++){
     
      let bTest: boolean = (this.dynamicTabs[i].dataContext.id != data.id);
      bOK = bOK && bTest;
      console.log(this.dynamicTabs[i].dataContext.id, '|', data.id);
     
      if (!bTest) {
        selTab = this.dynamicTabs[i];
      }

    }

    if (bOK) {
    // get a component factory for our TabComponent
        const componentFactory = this._componentFactoryResolver.resolveComponentFactory(TabComponent);

    // fetch the view container reference from our anchor directive

        const viewContainerRef = this.dynamicTabPlaceholder.viewContainer;
    // alternatively...
    // let viewContainerRef = this.dynamicTabPlaceholder;

    // create a component instance: andere Eingenschten vorhanden!
        const componentRef = viewContainerRef.createComponent(componentFactory);

      
      // console.log('data.com', data.comp);
      // const componentMainFactory = this._componentFactoryResolver.resolveComponentFactory(data.comp);
      // const viewMainContainerRef = this.mainPlaceholderDirective.viewContainer;
      // const maincomponentRef = viewMainContainerRef.createComponent(componentMainFactory);


    // set the according properties on our component instance
        const instance: TabComponent = componentRef.instance as TabComponent;
        instance.title = title;
      //  instance.template = template;
      //  instance.dataContext = data;
        instance.isCloseable = isCloseable;
      //  instance.instance = maincomponentRef; 
           
       // remember the dynamic component for rendering the
       // tab navigation headers
       this.dynamicTabs.push(componentRef.instance as TabComponent);

      //  console.log('dynamicTabs...', this.dynamicTabs);
      
       // set it active
       this.selectTab(this.dynamicTabs[this.dynamicTabs.length - 1]);

    } else {
        // window.alert(`Tab with ID ${data.id} schon vorhanden!` );
        this.selectTab(selTab);
    }
  }

   selectTab(tab: TabComponent) {

    // deactivate all tabs
    this.tabs.toArray().forEach(tab => (tab.active = false));
    this.dynamicTabs.forEach(tab => (tab.active = false));
    // activate the tab the user has clicked on.
    tab.active = true;

  }


  closeTab(tab: TabComponent) {
    for (let i = 0; i < this.dynamicTabs.length; i++) {
      if (this.dynamicTabs[i] === tab) {

        // remove the tab from our array
        this.dynamicTabs.splice(i, 1);

        // destroy our dynamically created component again
        let viewContainerRef = this.dynamicTabPlaceholder.viewContainer;
        // let viewContainerRef = this.dynamicTabPlaceholder;
        viewContainerRef.remove(i);

        // set tab index to 1st one
        // this.selectTab(this.tabs.first);
        this.selectTab(this.dynamicTabs[this.dynamicTabs.length-1]);
       // break;
      }
    }
  }

  closeActiveTab() {
    const activeTabs = this.dynamicTabs.filter(tab => tab.active);
    if (activeTabs.length > 0) {
      // close the 1st active tab (should only be one at a time)
      this.closeTab(activeTabs[0]);
    }
  }

}


