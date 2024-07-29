import { HttpInterceptorFn, HttpRequest, HttpHandlerFn, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";

export const AuthInterceptor:HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<any>>  =>
    {
        {
            let token = localStorage.getItem("authToken");
    
            if(token)
            {
    
                req = req.clone({
                    setHeaders:{Authorization: 'Bearer '+token}
                });
            }
    
            return next(req);//vai avanti poi normalmente
        }
    }