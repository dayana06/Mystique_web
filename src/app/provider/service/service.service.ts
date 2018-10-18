import { Injectable } from '@angular/core';
import { Iservice, IserviceKind } from '../../app.component';

@Injectable()
export class ServiceService {

  item: Iservice;
  itemKind: IserviceKind;

  constructor() { }

  setItem(item) {
    this.item = item;
  }

  getItem() {
    return this.item;
  }

  setItemKind(item) {
    this.itemKind = item;
  }

  getItemKind() {
    return this.itemKind;
  }


}
