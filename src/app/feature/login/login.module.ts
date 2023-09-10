import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from './login.component';
import {NavbarModule} from "../../root/navigation/navbar.module";

@NgModule({
  declarations: [LoginComponent],
  imports: [ReactiveFormsModule, FormsModule, NavbarModule],
})
export class LoginModule {
}
