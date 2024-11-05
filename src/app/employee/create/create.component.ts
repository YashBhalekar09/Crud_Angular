import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeServiceService } from 'src/app/employee-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent {
  employeeForm: Employee = {
    id: '',
    name: '',
    designation: '',
    salary: 0,
    experiance: 0,
  };

  constructor(
    private service: EmployeeServiceService,
    private router: Router
  ) {}

  create() {
    this.service.create(this.employeeForm).subscribe({
      next: (data) => {
        alert('Employee Data Added...');
        this.router.navigate(['employee/home']);
      },
      error: (err) => {
        console.error();
      },
    });
  }

  reset() {
    this.employeeForm = {
      id: '',
      name: '',
      designation: '',
      salary: 0,
      experiance: 0,
    };
  }
}
