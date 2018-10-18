import { Component, OnInit } from '@angular/core';
import { ServicePanelService } from './servicespanel.service';
import { AppService } from '../app.service';
import { Ititle } from '../app.component';
import { Icards } from '../app.component';

declare var require: any
@Component({
  selector: 'app-servicespanel',
  templateUrl: './servicespanel.component.html',
  styleUrls: ['./servicespanel.component.css'],
  providers: [ServicePanelService, AppService]
})
export class ServicespanelComponent implements OnInit {

  servicesDataCards: Icards[];
  servicesDataTitle: Ititle[];

  constructor(private servicesPanelService: AppService) {
    this.servicesPanelService.getCards().subscribe(services => {
      this.servicesDataCards = services.data;
    });

    this.servicesPanelService.getRealTitle().subscribe(title => {
      this.servicesDataTitle = title.data;

    })
  }

  ngOnInit() {
  }
}

