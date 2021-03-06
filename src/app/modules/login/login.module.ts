import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginFormComponent } from './components/login-form.component';
import { LoginComponent } from './pages/login.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoginFormComponent, LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
