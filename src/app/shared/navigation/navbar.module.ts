import { NgClass, NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';
import { NavbarComponent } from './navbar.component';

@NgModule({
  declarations: [NavbarComponent],
  providers: [AuthenticationService],
  imports: [NgIf, NgClass],
  exports: [NavbarComponent],
})
export class NavbarModule {}
