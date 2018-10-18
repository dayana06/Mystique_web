import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Iemployee, IserviceCategory, Ispecialty } from '../app.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  providers: [AppService]
})
export class EmployeeListComponent implements OnInit {
  employeeList: Iemployee[];
  employeesServiceCategory: IserviceCategory[];
  employeesSpecialist: Ispecialty[];
  
  constructor(private appService: AppService) {
    this.appService.getEmployeeList().subscribe(employeeList => {
      this.employeeList = employeeList.data;
    });
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
