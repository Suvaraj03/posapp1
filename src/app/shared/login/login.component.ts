import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { IUser } from '../../model/user.model';
import { CommonModule } from '@angular/common';


declare var $:any;
@Component({
  selector: 'app-login',
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router: Router,private authService:AuthService){}

  errorMessage :string | null = null
  loginData :IUser  = {email:"",password:""}
  onLogin() {
    this.authService.login(this.loginData).subscribe({
      next: response=>{
        $("#authModel").modal("hide")
        if(response.token)
        {
          this.authService.saveToken(response);
          this.router.navigate(['/admin/dashboard'])
        }
      },
      error: error=>{
        this.errorMessage="Invalid login details"
      }
    })
  }

  resetForm(form: any) {
    form.reset(); // Clears all fields
    this.loginData = { email: '', password: '' }; // Optionally clear your model data
  }

}
