import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl:string="http://localhost:8080/user"

  constructor(private http:HttpClient) { }
  
  // // Or sessionStorage
  // isRegistered(): boolean {
  //   return localStorage.getItem('isRegistered') === 'true'; 
  // }

  // // Set the user as registered
  // registerUser(): void {
  //   localStorage.setItem('isRegistered', 'true');
  // }

  // // Logout user
  // logoutUser(): void {
  //   localStorage.removeItem('isRegistered');
  // }

}
