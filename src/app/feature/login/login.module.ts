import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarModule } from '../../shared/navigation/navbar.module';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [ReactiveFormsModule, FormsModule, NavbarModule],
})
export class LoginModule {}
