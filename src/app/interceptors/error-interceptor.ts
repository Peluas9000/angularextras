import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from 'ngx-yet-another-toast-library';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const toastService :ToastService = inject(ToastService); // Inyecta el servicio de notificaciones
  const _router:Router=inject(Router); // Inyecta el servicio de enrutamiento
  return next(req).pipe(
    catchError((error:HttpErrorResponse) => {
      toastService.error(error.message); // Muestra una notificación de error
      console.log('Tipo de error en la solicitud:', error.status);
      console.log('Mensaje de error:', error.message);
      //ESTAMOS CAPTURANDO UN ERROR , DEBEMOS PROPAGAR DICHO ERROR A LA PETICION 
      //PETICION
      _router.navigate(['/error']);
      return throwError(() => error);
    })
  );
};
