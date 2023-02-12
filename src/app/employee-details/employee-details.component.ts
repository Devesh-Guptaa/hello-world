import { IEmployee } from './../employeeInterface';
import { Observable } from 'rxjs';
import { EmployeeService } from './../employee.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {

  public Empdetails: any = [];
  public error: any;

  constructor(private detailsFromEmpService: EmployeeService) {

  }

  ngOnInit() {
    this.detailsFromEmpService.getDetails().subscribe(data => this.Empdetails = data.data, error => this.error = error);
  }
}
