import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LandingComponent } from './landing.component';
import {NavbarComponent} from "../../shared/navbar.component";
import {AuthenticationService} from "../../root/authentication/authentication.service";
import {NavbarModule} from "../../shared/navbar.module";
import {NgIf} from "@angular/common";

@NgModule({
  declarations: [LandingComponent],
  imports: [NavbarModule, NgIf],
  providers: [AuthenticationService],
  bootstrap: [LandingComponent],
})
export class LandingModule {}

