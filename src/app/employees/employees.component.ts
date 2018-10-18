import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Ititle, Ispecialty } from '../app.component';
import { Icards } from '../app.component';
import { IserviceCategory } from '../app.component';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers: [AppService]
})
export class EmployeesComponent implements OnInit {
  employeesDataTitle: Ititle[];
  employeesCards: Icards[];
  employeesSpecialist: Ispecialty;
  employeesServiceCategory: IserviceCategory[];

  constructor(private appService: AppService) {
    this.appService.getRealTitle().subscribe(title => {
      this.employeesDataTitle = title.data;
    })
    this.appService.getEmployee().subscribe(employee => {
      this.employeesCards = employee.data;
    })
    this.appService.getServiceCategory().subscribe(serviceCategory => {
      this.employeesServiceCategory = serviceCategory.data;
    })
    this.appService.getSpecialty().subscribe(specialty => {
      this.employeesSpecialist = specialty.data;
    })


  }

  ngOnInit() {
  }

}
