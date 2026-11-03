import { HttpInterceptorFn } from '@angular/common/http'; 

export const authTokenInterceptor: HttpInterceptorFn = (req, next) => { 

  const token = sessionStorage.getItem("TOKEN"); 

  //SI TENEMOS TOKEN, DEBEMOS CLONAR LA PETICION 

  if (token) { 

    //DEBEMOS CLONAR LA PETICION 

    const tokenRequest = req.clone({ 

      setHeaders: { 

        Authorization: "bearer " + token 

      } 

    }) 

    //DEVOLVEMOS LA PETICION DEL TOKEN 

    return next(tokenRequest); 

  } 

  return next(req); 

}; 