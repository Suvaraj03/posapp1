import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';
import { Register } from '../model/register.model';
import { IUser, User } from '../model/user.model';
import { routes } from '../app.routes';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = "http://localhost:8080/user"
  constructor(private http:HttpClient, private router:Router) { }


 private Profile =  new BehaviorSubject<User | null>(null);
   profileData$ = this.Profile.asObservable();


   private Register =  new BehaviorSubject<boolean>(false);
   registerData$ = this.Register.asObservable();

 setProfileState(user : User):void {
   this.Profile.next(user);
 }

 setRegisterState(state:boolean):void 
 {
  this.Register.next(state);
 }



  register(newUser:Register):Observable<User>{
    return this.http.post<User>(this.apiUrl+"/register",newUser)
  }


  login(credential:IUser):Observable<User>
  {
    return this.http.post<User>(this.apiUrl+"/login",credential)
  }


  saveToken(response:User)
  {
    localStorage.setItem("authToken",response.token!);
    this.setProfileState(response)
    this.Profile.next(response);
    localStorage.setItem("email", response.email)
   
    
    // this.profileData$.subscribe(result=>{
    //   alert(result!.email)
    // })

  }

  getProfile():Observable<User>
  {
    //  const headers = new HttpHeaders()
    //  .set('Authorization', 'Bearer '+localStorage.getItem("authToken"))
    //   return this.http.get<User>(this.apiUrl+"/profile",{headers});


    return this.http.get<User>(this.apiUrl+"/profile");
  }


  

  logout()
  {
    localStorage.removeItem("authToken");
    this.Profile.next(null);
    localStorage.removeItem("email")

    this.router.navigate(['/'])
  }

}
