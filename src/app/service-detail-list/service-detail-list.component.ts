import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Iservice, IserviceKind } from '../app.component';
import { ServiceService } from '../provider/service/service.service';

@Component({
  selector: 'app-service-detail-list',
  templateUrl: './service-detail-list.component.html',
  styleUrls: ['./service-detail-list.component.css'],
  providers: [AppService]
})
export class ServiceDetailListComponent implements OnInit {
  serviceKindList: IserviceKind[];
  categoryToSearch: Number;
  serviceList: Iservice[];

  constructor(private appService: AppService, public serviceService: ServiceService) {
    this.categoryToSearch = Number(this.serviceService.getItemKind().id);
    this.appService.getServicesByKind().subscribe(serviceKindlist => {
      this.serviceKindList = serviceKindlist.data;
    });
    this.appService.getServices().subscribe(servicelist => {
      this.serviceList = servicelist.data;
    });
  }

  ngOnInit() {
  }



}
