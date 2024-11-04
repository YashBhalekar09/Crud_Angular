import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Employee } from './employee/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeServiceService {
  constructor(private http: HttpClient) {}

  get() {
    return this.http.get<Employee[]>('http://localhost:3000/employee');
  }

  create(payload: Employee) {
    return this.http.post<Employee>('http://localhost:3000/employee', payload);
  }

  getById(id: string) {
    return this.http.get<Employee>(`http://localhost:3000/employee/${id}`);
  }

  update(payload: Employee) {
    return this.http.put<Employee>(
      `http://localhost:3000/employee/${payload.id}`,
      payload
    );
  }

  delete(id: string) {
    return this.http.delete<Employee>(`http://localhost:3000/employee/${id}`);
  }
}
