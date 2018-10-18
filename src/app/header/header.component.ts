import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Ititle } from '../app.component';
import { Ibussiness } from '../app.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [AppService]
})
export class HeaderComponent implements OnInit {
  headerDataTitle: Ititle[];
  bussinessData: Ibussiness;
  businessStartHour;
  businessEndHour;
  
  constructor(private appService: AppService) {
    this.appService.getRealTitle().subscribe(headerTitles => {
      this.headerDataTitle = headerTitles.data;
    });
    this.appService.getBussiness().subscribe(bussinessInfo => {
      this.bussinessData = bussinessInfo.data[0];
      this.businessStartHour = this.bussinessData.hora_inicio_trabajo.toString().substr(0, this.bussinessData.hora_inicio_trabajo.toString().indexOf('-'));
      this.businessEndHour = this.bussinessData.hora_fin_trabajo.toString().substr(0, this.bussinessData.hora_fin_trabajo.toString().indexOf('-'));
    });


  }

  ngOnInit() {
  }

}

