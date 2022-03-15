import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SharedModule } from '../shared/shared.module';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { EmailComponent } from './sign-up/steps/email/email.component';
import { CompleteFormComponent } from './sign-up/steps/complete-form/complete-form.component';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';

@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    EmailComponent,
    CompleteFormComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    NgxsFormPluginModule,
  ],
})
export class AuthModule {}
