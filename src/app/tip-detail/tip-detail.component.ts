import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Itip } from '../app.component';
import { TipsService } from '../provider/tips/tips.service';

@Component({
  selector: 'app-tip-detail',
  templateUrl: './tip-detail.component.html',
  styleUrls: ['./tip-detail.component.css'],
  providers: [AppService]
})
export class TipDetailComponent implements OnInit {
  blogDetail: Itip;

  constructor(private appService: AppService, public tipsService : TipsService) {
    this.blogDetail = this.tipsService.getItem()
  }



  ngOnInit() {
  }

}
