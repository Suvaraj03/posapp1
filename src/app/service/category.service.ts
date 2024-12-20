import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../model/category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiUrl:string="http://localhost:8080/category"

  constructor(private http:HttpClient) { }

  addCategory(newCategory:Category):Observable<Category>{
    return this.http.post<Category>(this.apiUrl,newCategory)
  }

  getAllCategory():Observable<Category[]>{
    return this.http.get<Category[]>(this.apiUrl)
  }
  editCategory(id:number,editCategory:Category):Observable<Category>{
    return this.http.put<Category>(this.apiUrl+'/'+id,editCategory)
  }
  deleteCategory(id:number){
    return this.http.delete(this.apiUrl+'/'+id)
  }
}
