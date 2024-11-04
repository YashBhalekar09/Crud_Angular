import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from 'src/app/employee-service.service';
import { Employee } from '../employee';
import { Router ,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
  employeeForm: Employee={
    id:'',
    name:'',
    designation:'',
    salary:0,
    experiance:0
  }

  constructor(private service:EmployeeServiceService,private router:Router,private route:ActivatedRoute){}


  ngOnInit(): void {
   this.route.paramMap.subscribe((param)=>{
    var id=String(param.get('id'));
    this.getById(id);
   })
  }

  getById(id:string){
    this.service.getById(id).subscribe((data)=>{
      this.employeeForm=data;
    });
  }

  update(){
    this.service.update(this.employeeForm).subscribe({
      next:(data)=>{
        alert("Employee Data Updated!!!")
        this.router.navigate(['employee/home']);
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

}
