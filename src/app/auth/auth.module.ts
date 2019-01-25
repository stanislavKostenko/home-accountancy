import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  ErrorStateMatcher,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  ShowOnDirtyErrorStateMatcher
} from '@angular/material';

import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {AuthComponent} from './auth.component';
import {AuthRoutingModule} from './auth-routing.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  declarations: [LoginComponent, RegistrationComponent, AuthComponent],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ]
})
export class AuthModule {
}
