import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, retry } from 'rxjs';
import { SignupSteps } from 'src/app/models/auth.model';
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
  @ViewChild('steprange') element!: ElementRef;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private acc_route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.acc_route.queryParams.subscribe((data) => {
      this.steps = data['steps'];
      this.next();
    });

    this.regForm = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
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
    console.log(this.regForm.value);

    switch (this.steps) {
      case 'email': {
        this.count++;
        return (
          this.fv['email'].invalid
            ? this.fv['email'].markAsTouched()
            : (this.steps = 'account_type'),
          this.router.navigate(['/auth/signup'], {
            queryParams: { steps: this.steps },
          })
        );
      }
      case 'account_type': {
        const acc_: 'personal' | 'business' = this.fv['account_type'].value;
        if (acc_ == 'personal') {
          this.steps = 'location';
        } else {
          // route to another page
        }
        this.range = 70 - 0.25 * 80;
        this.element.nativeElement.style.background = `linear-gradient(to right, #09825d 0%, #09825d ${this.range}%, #ACACAC ${this.range}%, #ACACAC 100%)`;
        this.count++;
        this.router.navigate(['/auth/signup'], {
          queryParams: { steps: this.steps },
        });
        return;
      }
      case 'location': {
        return this.fv['location'].invalid
          ? this.fv['location'].markAsTouched()
          : ((this.steps = 'verify'),
            this.count++,
            (this.range = 75),
            (this.element.nativeElement.style.background = `linear-gradient(to right, #09825d 0%, #09825d ${this.range}%, #ACACAC ${this.range}%, #ACACAC 100%)`),
            this.router.navigate(['/auth/signup'], {
              queryParams: { steps: this.steps },
            }));
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
        this.router.navigate(['/auth/signup'], {
          queryParams: { steps: this.steps },
        });
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

    const email = this.fv['email'].value;
    const password = this.fv['password'].value;

    setTimeout(() => {
      this.isSubmit.next(false);
      this.router.navigate(['dashboard']);
    }, 2000);
  }

  back() {
    switch (this.steps) {
      case 'password': {
        this.range = 75;
        this.element.nativeElement.style.background = `linear-gradient(to right, #09825d 0%, #09825d ${this.range}%, #ACACAC ${this.range}%, #ACACAC 100%)`;

        this.count = 4;
        this.steps = 'verify';
        this.router.navigate(['/auth/signup'], {
          queryParams: { steps: this.steps },
        });
        return;
      }
      case 'verify': {
        this.count = 3;
        this.range = 70 - 0.25 * 80;

        this.element.nativeElement.style.background = `linear-gradient(to right, #09825d 0%, #09825d ${this.range}%, #ACACAC ${this.range}%, #ACACAC 100%)`;
        this.steps = 'location';
        this.router.navigate(['/auth/signup'], {
          queryParams: { steps: this.steps },
        });
        return;
      }
      case 'location': {
        this.range = 20;

        this.element.nativeElement.style.background = `linear-gradient(to right, #09825d 0%, #09825d ${this.range}%, #ACACAC ${this.range}%, #ACACAC 100%)`;
        this.count = 2;
        this.steps = 'account_type';
        this.router.navigate(['/auth/signup'], {
          queryParams: { steps: this.steps },
        });
        return;
      }
      default:
        this.steps = 'email';
        this.router.navigate(['/auth/signup']);
    }
  }
}
