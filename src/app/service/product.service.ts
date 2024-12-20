import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl:string ="http://localhost:8080/product";

  constructor(private http:HttpClient) { }

  addProduct(newProduct:Product):Observable<Product>{
    return this.http.post<Product>(this.apiUrl,newProduct)
  }

  getProduct():Observable<Product[]>{
    return this.http.get<Product[]>(this.apiUrl)
  }


}
