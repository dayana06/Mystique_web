import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Icards } from '../app.component';
import { ServiceService } from '../provider/service/service.service';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css'],
  providers: [AppService]
})
export class ServiceListComponent implements OnInit {
  servicesDataCards: Icards[];

  constructor(private appService: AppService, public serviceService: ServiceService) { 
    this.appService.getCards().subscribe(services => {
      this.servicesDataCards = services.data;
    });
  }

  ngOnInit() {
  }

  seeServices(item) {
    this.serviceService.setItemKind(item);
  }

}
