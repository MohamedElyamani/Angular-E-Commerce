import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/shared/Services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  error: string = '';
  result: any;
  matchingPassword: boolean = false;
  constructor(
    private _auth: AuthService,
    private _router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {}
  registrationForm: FormGroup = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(15),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(`^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$`),
    ]),
    cPassword: new FormControl('', [
      Validators.required,
      Validators.pattern(`^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$`),
    ]),
  });

  submition() {
    const formValue = this.registrationForm.getRawValue();
    if (formValue.password === formValue.cPassword) {
      this.matchingPassword = true;
    } else {
      this.matchingPassword = false;
      return;
    }
    if (this.registrationForm.valid) {
      let result = this._auth.register(this.registrationForm.value).subscribe(
        (data: any) => {
          if (data.message == 'Done') {
            this.registrationForm.reset();
            this.messageService.add({
              severity: 'success',
              summary: 'User Added Successfuly',
              detail: 'Now Login to shop',
              life: 3000,
            });
          }
        },
        (error) => {
          if (error?.error?.message) {
            this.error = error.error.message;
          } else if (error?.error?.cPassword) {
            this.error = error.error.cPassword;
          }

          this.messageService.add({
            severity: 'error',
            summary: 'Somthing Wrong',
            detail: 'Cheak inputs',
            life: 3000,
          });
        }
      );
    } else {
      this.error = 'Some Fields are Required';
    }
  }

  checkMatch() {
    const formValue = this.registrationForm.getRawValue();
    if (formValue.password === formValue.cPassword) {
      this.matchingPassword = true;
    } else {
      this.matchingPassword = false;
    }
  }
}
