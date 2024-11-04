import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from 'src/app/employee-service.service';
import { Employee } from '../employee';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
constructor(private service:EmployeeServiceService){}

ngOnInit(): void {
    this.get();
}



allEmp:Employee[]=[];

get(){
  this.service.get().subscribe((res)=>{
    this.allEmp=res;
  })
}

delete(id:string){
  if(confirm('Are you sure to delete?'))
  this.service.delete(id).subscribe((data)=>
  {
    alert("Employee Deleted!!!")
    this.allEmp=this.allEmp.filter((allData)=>allData.id!=id);
  })
}

}
