
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/Services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  password:boolean = false;
  error:string = ''
  constructor(private _auth:AuthService, private _router:Router){}
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern(`^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$`)]),
  })

  ngOnInit(): void {
    this.forgetPassword()

  }
  forgetPassword(){
    this.password = true
  }
  submition(){
    if(this.loginForm.valid){
      this._auth.login(this.loginForm.value).subscribe((data:any)=>{
        if(data.message == "Done"){
          localStorage.setItem('userToken', data.token);
          this._auth.saveUserData();
          this._router.navigate(['home'])
        }
    },(error)=>{
      this.error = error.error.message
    })
    }else{
      this.error = 'Invalid Email or Password'
    }

  }

}
