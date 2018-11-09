import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EmployeeService } from '../employee.service';
import { EmpServiceService } from '../emp-service.service';
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employee: any;
  empserviceservice: EmpServiceService;
  constructor(  empserviceservice: EmpServiceService,
              private route: ActivatedRoute) {
                this.empserviceservice = empserviceservice;
  }
  id: string;
  sub: any;
  event: any;

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];

      this.event = this.empserviceservice.getEmployeeDetails(this.id).subscribe();
    });
  }
}






