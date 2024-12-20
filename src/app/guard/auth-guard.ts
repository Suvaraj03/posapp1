import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";

export const authGuard : CanActivateFn = (route ,state) =>
    {
      const router = inject(Router);

     
    
      const isLoggedIn = !!localStorage.getItem('authToken'); //check if token exists
    
      if (isLoggedIn) 
      {
        return true;
        
      }
      else
      {
        router.navigate(['/'])
        return false;
      }
    }
    
      