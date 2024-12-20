import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../service/auth.service';
import { User } from '../../model/user.model';
import { SafeHtml } from '@angular/platform-browser';
declare var $:any;

@Component({
  selector: 'app-home-page',
  imports: [RouterOutlet,RegisterComponent,RouterLink,LoginComponent,CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {

  profile: User | null =null;
  showRegister=true;
  registerStatus:Map<String, String> | null = new Map<string, string>();;
  

  constructor(private authService: AuthService){}


  ngOnInit(): void {
    
    this.authService.profileData$.subscribe(response=>{
      this.profile=response;
      
    })

    this.authService.registerData$.subscribe(state=>
    {
      if(state)
      {
        $("#alertModal").modal("show")
        this.registerStatus?.set("status", "Success")
        this.registerStatus?.set("message", "Click here to login")
      }
     
    }
    )


    //For refesh
    if(!this.profile)
    {
      this.authService.getProfile().subscribe(profile=>{
        this.profile=profile;
      })
    }


    
  }

  toggleRegister() {
    this.showRegister=!this.showRegister;
  }

  showLogin()
  {
    this.toggleRegister()
    $("#authModel").modal("show")
  }

  logout()
  {
    this.authService.logout()
  }

}
