import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Ipromo, Iservice, Ititle } from '../app.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-list-promo',
  templateUrl: './list-promo.component.html',
  styleUrls: ['./list-promo.component.css'],
  providers: [AppService]
})
export class ListPromoComponent implements OnInit {
  promoList: Ipromo[] = [];
  serviceList: Iservice[];
  promoTitle: Ititle[];

  constructor(private appService: AppService) {
    this.appService.getPromoList().subscribe(promos => {
      for (let item of promos.data) {
        if (new Date(item.fecha_fin).getTime() > Date.now()) {
          this.promoList.push(item);
        }
      }
    });
    this.appService.getServices().subscribe(service => {
      this.serviceList = service.data;
    });
    this.appService.getRealTitle().subscribe(title => {
      this.promoTitle = title.data;
    });
  }

  ngOnInit() {
  }

}
