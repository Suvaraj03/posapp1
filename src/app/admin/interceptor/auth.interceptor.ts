import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

const token = localStorage.getItem("authToken")

if(req.url.includes("/login") ||  req.url.includes("/register") || token == null )
{
    return next(req)
}


  const authReq = req.clone({
    setHeaders: {
      Authorization: 'Bearer '+token
    },
  });

  // Forward the modified request to the next handler
  return next(authReq);
};


