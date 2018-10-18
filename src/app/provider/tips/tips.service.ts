import { Injectable } from '@angular/core';
import { Itip } from '../../app.component';

@Injectable()
export class TipsService {

  item: Itip;

  constructor() { }

  setItem(item) {
    this.item = item;
  }
  getItem() {
    return this.item
  }
}
