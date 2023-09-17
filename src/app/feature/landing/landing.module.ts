import { NgModule } from '@angular/core';

import { NgIf } from '@angular/common';
import { AuthenticationService } from '../../shared/authentication/authentication.service';
import { NavbarModule } from '../../shared/navigation/navbar.module';
import { LandingComponent } from './landing.component';

@NgModule({
  declarations: [LandingComponent],
  imports: [NavbarModule, NgIf],
  providers: [AuthenticationService],
  bootstrap: [LandingComponent],
})
export class LandingModule {}
