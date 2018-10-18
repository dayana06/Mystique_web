import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Ititle, Ipromo } from '../app.component';
import { Icards } from '../app.component';

declare var require : any

@Component({
  selector: 'app-promo',
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.css'],
  providers: [AppService]
})
export class PromoComponent implements OnInit {

  promoDataCards: Ipromo[];
  promoDataTitle: Ititle[];

  constructor(private appService: AppService) { 
    this.appService.getPromoList().subscribe(services => {
      this.promoDataCards = services.data;
    });

    this.appService.getRealTitle().subscribe(title => {
      this.promoDataTitle = title.data;

    })


  }

  ngOnInit() {
  }

}
