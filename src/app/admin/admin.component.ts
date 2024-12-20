import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { User } from '../model/user.model';

@Component({
  selector: 'app-admin',
  imports: [RouterOutlet,RouterLink,BreadcrumbComponent,CommonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {

  static role="";
   profile: User | null = {name:"",email:"",phone:"",password:"",role:"" };

  constructor(private authService:AuthService){}
 
 
  ngOnInit(): void {
    
    this.authService.getProfile().subscribe({
     next: (response)=>{
      this.profile=response;
    // console.log("my profile at admin is "+ this.profile.email)
     },

     error: err=>{
        this.logout();
     }
     
    });
  }

  logout()
  {
    this.authService.logout();
  }

}
