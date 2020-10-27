import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.css'],
})
export class GenericTableComponent implements OnInit {
  @Input() data: any[];
  @Input() headers: any[];
  edit: boolean = false;
  idEdit: any;
  @Input() userFilter: any;
  constructor() {}

  getHeaders() {
    let headers: string[] = [];

    if (this.data) {
      this.data.forEach((value) => {
        Object.keys(value).forEach((key) => {
          if (!headers.find((header) => header == key)) {
            headers.push(key);
          }
        });
      });
    }
    return headers;
  }

  getNestedObject(key: string, item: Array<any>) {
    Object.keys(item).forEach((key) => {
      if (key === 'address') {
        console.log(item[key].city);
      }
    });
    return key != 'address' ? item[key] : item[key].city;
  }

  Edit(item) {
    this.edit = true;
    this.idEdit = item;
    console.log('edit!', this.idEdit);
  }

  ngOnInit(): void {}
}
