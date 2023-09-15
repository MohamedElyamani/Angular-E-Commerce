 import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../shared/Services/auth.service';
import { inject } from '@angular/core';


 export const authGuard: CanActivateFn = (route, state) => {

  return inject(AuthService).userData.getValue() != null ? true : inject(Router).navigate(['login']) && false

};



