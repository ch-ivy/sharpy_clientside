import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ForgotSteps } from 'src/app/models/auth.model';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  step: ForgotSteps = 'prompt';
  email!: string;
  password!: string;
  cPassword!: string;

  constructor() {}

  ngOnInit(): void {}

  next(el?: NgModel, el2?: NgModel) {
    switch (this.step) {
      case 'prompt': {
        this.step = 'email';
        return;
      }
      case 'email': {
        if (el) {
          if (el.invalid) {
            el.control.markAllAsTouched();
          } else {
            this.step = 'newpassword';
          }
        }
        return;
      }
      case 'newpassword': {
        if (el && el2) {
          if (
            el.invalid ||
            el2.invalid ||
            this.cPassword !== this.password.trim()
          ) {
            el.control.markAllAsTouched();
            el2.control.markAllAsTouched();
          } else {
            this.reset();
            el.reset();
            el2.reset();
          }
        }
      }
    }
  }

  reset() {
    console.log('reset password');
  }
}
