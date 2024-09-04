import { HttpInterceptorFn, HttpRequest, HttpHandlerFn, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";

export const AuthInterceptor:HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<any>>  =>
    {
        {
            console.log("ciao");
            let token = localStorage.getItem("authToken");
    
            if(token)
            {
    
                req = req.clone({
                    setHeaders:{Authorization: 'Bearer '+token}
                });
                console.log(token);
            }
    
            return next(req);//vai avanti poi normalmente
        }
    }