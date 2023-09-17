import { NgClass, NgForOf, NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarModule } from '../../../shared/navigation/navbar.module';
import { ClientFormComponent } from './client-form.component';

@NgModule({
  declarations: [ClientFormComponent],
  imports: [ReactiveFormsModule, NavbarModule, NgIf, NgClass, NgForOf],
})
export class ClientFormModule {}
