import { Component, OnInit } from '@angular/core';
import { ListTipsService } from './list-tips.service';
import { AppService } from '../app.service';
import { Itip } from '../app.component';
import { TipsService } from '../provider/tips/tips.service';

@Component({
  selector: 'app-list-tips',
  templateUrl: './list-tips.component.html',
  styleUrls: ['./list-tips.component.css'],
  providers: [AppService]
})
export class ListTipsComponent implements OnInit {
  tipList: Itip[];

  constructor(private appService: AppService, public tipsService: TipsService) {
    this.appService.getBlogInfo().subscribe(tip => {
      this.tipList = tip.data;
    });
  }

  ngOnInit() {
  }
  seeDetail(item) {
    this.tipsService.setItem(item)
  }
}
