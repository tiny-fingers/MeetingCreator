import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LandingComponent } from './landing.component';

@NgModule({
  declarations: [LandingComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [LandingComponent],
})
export class LandingModule {}
