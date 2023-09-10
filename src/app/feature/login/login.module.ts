import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from './login.component';
import {NavbarModule} from "../../shared/navbar.module";

@NgModule({
  declarations: [LoginComponent],
  imports: [ReactiveFormsModule, FormsModule, NavbarModule],
})
export class LoginModule {
}
