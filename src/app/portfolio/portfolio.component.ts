import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Icards, Ititle } from '../app.component';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  providers: [AppService]
})
export class PortfolioComponent implements OnInit {
portfolioImage: Icards[];
portfolioTitle: Ititle[];
  constructor(private appService: AppService) {
    this.appService.getCards().subscribe(image => {
      this.portfolioImage = image.data;
    });this.appService.getRealTitle().subscribe(title => {
      this.portfolioTitle = title.data;
    });

   }

  ngOnInit() {
  }

}
