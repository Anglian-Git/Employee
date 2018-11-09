import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  eform: FormGroup;

  constructor() { }

  ngOnInit() {
    this.eform = new FormGroup({
     id : new FormControl('', Validators.required)
    });
  }

}
