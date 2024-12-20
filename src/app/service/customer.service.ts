import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../model/customer.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private apiUrl:string="http://localhost:8080/customer"

  constructor(private http:HttpClient) { }

  createCustomer(newCustomer:Customer):Observable<Customer>{
    return this.http.post<Customer>(this.apiUrl,newCustomer)
  }

}
