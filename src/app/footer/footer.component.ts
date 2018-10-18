import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Ibussiness } from '../app.component';
import { IbussinessContact } from '../app.component';
import { Isystem } from '../app.component';
import { Time } from '@angular/common';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  providers: [AppService]
})
export class FooterComponent implements OnInit {
  bussinessData: Ibussiness;
  businessContact: IbussinessContact[];
  systemInfo: Isystem[];
  businessStartHour: String;
  businessEndHour: String;

  constructor(private appService: AppService) {
    this.appService.getBussiness().subscribe(bussinessInfo => {
      this.bussinessData = bussinessInfo.data[0];
      this.businessStartHour = this.bussinessData.hora_inicio_trabajo.toString().substr(0, this.bussinessData.hora_inicio_trabajo.toString().indexOf('-'));
      this.businessEndHour = this.bussinessData.hora_fin_trabajo.toString().substr(0, this.bussinessData.hora_fin_trabajo.toString().indexOf('-'));
    });
    this.appService.getBussinessContact().subscribe(bussinessInfoContact => {
      this.businessContact = bussinessInfoContact.data;
    });
    this.appService.getSystemInfo().subscribe(systemInfo => {
      this.systemInfo = systemInfo.data[0];
    });
  }

  ngOnInit() {
  }

}
