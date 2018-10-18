import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Ititle } from '../app.component';
import { Itip } from '../app.component';
import { TipDetailComponent } from '../tip-detail/tip-detail.component';
import { TipsService } from '../provider/tips/tips.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [AppService]
})
export class BlogComponent implements OnInit {
  blogDataCards: Itip[];
  blogDataTitle: Ititle[];



  constructor(private appService: AppService, public tipsService: TipsService) {
    this.appService.getBlogInfo().subscribe(tips => {
      this.blogDataCards = tips.data;
    });

    this.appService.getRealTitle().subscribe(title => {
      this.blogDataTitle = title.data;
    })
  }

  formatDate() {
  }

  ngOnInit() {
  }

  seeDetail(blogDataCard) {
    this.tipsService.setItem(blogDataCard)
  }

}
