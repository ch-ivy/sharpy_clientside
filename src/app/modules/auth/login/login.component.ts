import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  password_type: 'Text' | 'Password' = 'Password';
  loginForm!: FormGroup;
  isLogin = new BehaviorSubject<boolean>(false);

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      remember: [false],
    });
  }

  /* Form values */
  get fv() {
    return this.loginForm.controls;
  }

  togglePasswordType() {
    return (this.password_type =
      this.password_type == 'Text' ? 'Password' : 'Text');
  }

  submit() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();

      return;
    }
    this.isLogin.next(true);

    const email = this.fv['email'].value;
    const password = this.fv['password'].value;

    setTimeout(() => {
      this.isLogin.next(false);
      this.router.navigate(['dashboard']);
    }, 2000);
  }
}
