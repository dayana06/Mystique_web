import { Component, OnInit } from '@angular/core';
import { Ng4TwitterTimelineService } from 'ng4-twitter-timeline/lib/index';
import { AppService } from '../app.service';
import { Ititle, IsocialNetwork } from '../app.component';

@Component({
  selector: 'app-twittertimeline',
  templateUrl: './twittertimeline.component.html',
  styleUrls: ['./twittertimeline.component.css'],
  providers: [AppService]
})
export class TwittertimelineComponent implements OnInit {
  twitterDataTitle: Ititle[];
  twitterTimeline: IsocialNetwork[];
  twitterUser: String;

  constructor(private ng4TwitterTimelineService: Ng4TwitterTimelineService, private appService: AppService) {
    this.twitterUser = "Amin295";
    this.appService.getRealTitle().subscribe(twitter => {
      this.twitterDataTitle = twitter.data;
    });
    this.appService.getSocialNetwork().subscribe(twitter => {
      this.twitterTimeline = twitter.data;
    });
  }

  ngOnInit() {
  }

}
