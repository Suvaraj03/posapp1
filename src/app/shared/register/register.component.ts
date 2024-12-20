import { Component, NgModule } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms'
import { Register } from '../../model/register.model';
import { AuthService } from '../../service/auth.service';
import { CommonModule } from '@angular/common';
declare var $:any;
@Component({
  selector: 'app-register',
  imports: [CommonModule,FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private authService:AuthService, private router : Router){}

  newUser:Register={name:"",password:"",role:"",email:"",phone:""}
 
  registerStatus = ""


  onRegister(): void{

   

    this.authService.register(this.newUser).subscribe(
    {
      next: response =>{
        this.newUser={name:"",password:"",role:"",email:"",phone:""}
        $("#authModel").modal("hide")
        this.authService.setRegisterState(true);
       
      },

      error: error=>{
        this.registerStatus = error.error.message
      }
      

       // this.router.navigate(["/admin"])
    })

    
   
  
  }


}
