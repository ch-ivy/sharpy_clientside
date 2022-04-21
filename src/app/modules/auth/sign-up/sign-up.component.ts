import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, retry } from 'rxjs';
import { SignUpParam, SignupSteps } from 'src/app/models/auth.model';
import { PasswordValidator } from 'src/app/services/validator';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  password_type: 'Text' | 'Password' = 'Password';
  regForm!: FormGroup;
  isSubmit = new BehaviorSubject<boolean>(false);
  steps: SignupSteps = 'email';
  range = 20;
  count = 1;
  location_list = ['Famagusta', 'Girne', 'Lefkosia', 'Lefke', 'Iskele'];
  first_account_type = true;
  @ViewChild('steprange') element!: ElementRef;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private acc_route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.regForm = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        user_name: ['', [Validators.required]],
        name: ['', [Validators.required]],
        account_type: ['', [Validators.required]],
        acc_type2: [''],
        location: ['', [Validators.required]],
        area_code: ['+90', [Validators.required]],
        phone: [
          '',
          [
            Validators.required,
            Validators.maxLength(10),
            Validators.minLength(10),
          ],
        ],
        password: ['', [Validators.required, Validators.minLength(8)]],
        cPassword: ['', [Validators.required]],
      },
      {
        validator: PasswordValidator,
      }
    );
  }

  /* Form values */
  get fv() {
    return this.regForm.controls;
  }

  restrictAlpha(e: any) {
    if (!/\d+/.test(e.key)) {
      e.preventDefault();
    }
  }

  togglePasswordType() {
    return (this.password_type =
      this.password_type == 'Text' ? 'Password' : 'Text');
  }

  selectAccountType(value: 'personal' | 'business') {
    this.fv['account_type'].setValue(value);
    this.next();
  }

  selectBusinessType(value: 'service' | 'product') {
    this.fv['acc_type2'].setValue(value);
    this.next();
  }

  next() {
    switch (this.steps) {
      case 'email': {
        this.count++;
        return this.fv['email'].invalid ||
          this.fv['user_name'].invalid ||
          this.fv['name'].invalid
          ? this.fv['email'].markAsTouched()
          : (this.steps = 'account_type');
      }
      case 'account_type': {
        const acc_: 'personal' | 'business' = this.fv['account_type'].value;
        if (acc_ == 'personal') {
          this.fv['acc_type2'].removeValidators(Validators.required);
          this.fv['acc_type2'].reset('');
          this.regForm.updateValueAndValidity();
          this.steps = 'location';
        }
        if (acc_ == 'business' && this.first_account_type) {
          // route to another page
          this.fv['acc_type2'].addValidators(Validators.required);
          this.regForm.updateValueAndValidity();
          this.first_account_type = false;
          return;
        }

        if (!this.first_account_type) this.steps = 'location';
        this.count++;
        this.range = 70 - 0.25 * 80;
        this.element.nativeElement.style.background = `linear-gradient(to right, #09825d 0%, #09825d ${this.range}%, #ACACAC ${this.range}%, #ACACAC 100%)`;

        return;
      }
      case 'location': {
        return this.fv['location'].invalid
          ? this.fv['location'].markAsTouched()
          : ((this.steps = 'verify'),
            this.count++,
            (this.range = 75),
            (this.element.nativeElement.style.background = `linear-gradient(to right, #09825d 0%, #09825d ${this.range}%, #ACACAC ${this.range}%, #ACACAC 100%)`));
      }
      case 'verify': {
        if (this.fv['area_code'].invalid || this.fv['phone'].invalid) {
          this.fv['area_code'].markAsTouched();
          this.fv['phone'].markAsTouched();
          return;
        }
        this.steps = 'password';
        this.count++;
        this.range = 100;
        this.element.nativeElement.style.background = `linear-gradient(to right, #09825d 0%, #09825d ${this.range}%, #ACACAC ${this.range}%, #ACACAC 100%)`;

        return;
      }
      case 'password': {
        if (this.regForm.invalid) {
          this.regForm.markAllAsTouched();
          return;
        }
        this.submit();
        return;
      }
    }
  }

  submit() {
    this.isSubmit.next(true);

    const data: SignUpParam = {
      email: this.fv['email'].value,
      password: this.fv['password'].value,
      phone: this.fv['area_code'].value + this.fv['phone'].value,
      isSeller: this.fv['account_type'].value == 'business' ? true : false,
      location: this.fv['location'].value,
      fullName: this.fv['name'].value,
      username: this.fv['user_name'].value,
    };
    console.log(data);
  }

  back() {
    switch (this.steps) {
      case 'password': {
        this.range = 75;
        this.element.nativeElement.style.background = `linear-gradient(to right, #09825d 0%, #09825d ${this.range}%, #ACACAC ${this.range}%, #ACACAC 100%)`;

        this.count = 4;
        this.steps = 'verify';

        return;
      }
      case 'verify': {
        this.count = 3;
        this.range = 70 - 0.25 * 80;

        this.element.nativeElement.style.background = `linear-gradient(to right, #09825d 0%, #09825d ${this.range}%, #ACACAC ${this.range}%, #ACACAC 100%)`;
        this.steps = 'location';

        return;
      }
      case 'location': {
        this.range = 20;

        this.element.nativeElement.style.background = `linear-gradient(to right, #09825d 0%, #09825d ${this.range}%, #ACACAC ${this.range}%, #ACACAC 100%)`;
        this.count = 2;
        this.steps = 'account_type';
        return;
      }
      case 'account_type': {
        this.count = 1;
        this.range = 20;
        this.element.nativeElement.style.background = `linear-gradient(to right, #09825d 0%, #09825d ${this.range}%, #ACACAC ${this.range}%, #ACACAC 100%)`;

        !this.first_account_type
          ? (this.first_account_type = true)
          : (this.steps = 'email');
        return;
      }
      default:
        this.steps = 'email';
    }
  }
}
