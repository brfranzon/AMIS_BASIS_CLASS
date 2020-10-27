import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
//import { Greeter } from '../app/classes/greeter';
//import { Snake } from '../app/classes/snake';
//import { ConcreteCreator1 } from '../app/factory-method/fm';
//import { employeeFactory } from './factory-method/fm-person';
//import { TVsDataRecord } from './factory-method/vs';
//import { HttpClient } from '@angular/common/http';

import { Schueler } from './TVsDataObject/TvsDataObject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  ngOnInit(): void {}

  ngOnDestroy() {}


}
