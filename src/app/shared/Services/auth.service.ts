import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData = new BehaviorSubject(null)
  constructor(private _HttpClient:HttpClient, private _router:Router)
  {
    if(localStorage.getItem('userToken') != null){
      this.saveUserData()
    }
  }

  saveUserData(){
    let decodeUserData = JSON.stringify(localStorage.getItem('userToken'));
    this.userData.next(jwtDecode(decodeUserData))
  }
  register(registrationData:any):Observable<any>{
    return this._HttpClient.post('https://register-for-test.vercel.app/auth/signup', registrationData)
  }
  login(loginData:any){
    return this._HttpClient.post('https://register-for-test.vercel.app/auth/signin', loginData)
  }
  logout(){
    localStorage.removeItem('userToken');
    this.userData.next(null);
    this._router.navigate['login']
  }
}
