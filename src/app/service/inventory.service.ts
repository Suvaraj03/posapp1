import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Inventory } from '../model/inventory.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  private apiUrl:string="http://localhost:8080/inventory"

  constructor(private http:HttpClient) { }

  addInventory(newInventory:Inventory):Observable<Inventory>{
    return this.http.post<Inventory>(this.apiUrl,newInventory)
  }
  getInventory():Observable<Inventory[]>{
    return this.http.get<Inventory[]>(this.apiUrl)

  }
}
