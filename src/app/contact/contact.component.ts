import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Ibussiness, IbussinessContact, IbusinessGoals, Ititle } from '../app.component';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [AppService]
})
export class ContactComponent implements OnInit {
  bussinessData: Ibussiness;
  businessContact: IbussinessContact[];
  businessGoals: IbusinessGoals[];
  businessStartHour: String;
  businessEndHour: String;
  businessTitle: Ititle[];
  bussinessDescription = [] as any;

  constructor(private appService: AppService) {
    this.appService.getBussiness().subscribe(bussinessInfo => {
      this.bussinessData = bussinessInfo.data[0];
      this.businessStartHour = this.bussinessData.hora_inicio_trabajo.toString().substr(0, this.bussinessData.hora_inicio_trabajo.toString().indexOf('-'));
      this.businessEndHour = this.bussinessData.hora_fin_trabajo.toString().substr(0, this.bussinessData.hora_fin_trabajo.toString().indexOf('-'));
    });
    this.appService.getBussinessContact().subscribe(bussinessContact => {
      this.businessContact = bussinessContact.data;
    });
    this.appService.getBusinessGoals().subscribe(bussinessGoals => {
      this.businessGoals = bussinessGoals.data;
    });
    this.appService.getRealTitle().subscribe(title => {
      this.businessTitle = title.data;
    });
    this.appService.getBussinessDescription().subscribe(description => {
      this.bussinessDescription = description.data;
    });
  }

  ngOnInit() {
  }

}
