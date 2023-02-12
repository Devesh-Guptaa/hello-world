import { EmployeeService } from './../employee.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  public Empdetails: any = [];
  public error: any;

  constructor(private detailsFromEmpService: EmployeeService) {

  }

  ngOnInit() {
    this.detailsFromEmpService.getDetails().subscribe(data => this.Empdetails = data.data, error => this.error = error);
  }
}
