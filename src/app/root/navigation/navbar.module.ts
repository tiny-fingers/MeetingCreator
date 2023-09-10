import {NgModule} from "@angular/core";
import {NavbarComponent} from "./navbar.component";
import {AuthenticationService} from "../authentication/authentication.service";
import {NgClass, NgIf} from "@angular/common";

@NgModule({
  declarations: [NavbarComponent],
  providers: [AuthenticationService],
  imports: [
    NgIf,
    NgClass
  ],
  exports: [NavbarComponent]
})
export class NavbarModule {}
