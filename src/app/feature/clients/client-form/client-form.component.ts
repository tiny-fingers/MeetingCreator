import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Client, Contact } from '../../../root/model/Client';
import { ClientsService } from '../../../shared/clients/clients.service';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css'],
})
export class ClientFormComponent {
  clientForm: FormGroup;
  isFormValid: boolean = false;
  contactEmails: Contact[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private location: Location,
  ) {
    this.clientForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.email]],
      description: [''],
    });
  }

  addContactEmail(event: Event) {
    event.preventDefault();

    const email = this.clientForm.get('email')?.value;
    if (!this.clientForm.controls['email'].valid) {
      this.clientForm.controls['email'].markAsDirty();
    } else {
      if (email && !this.contactEmails.includes(email)) {
        this.contactEmails.push({ email: email });
      }
      this.clientForm.get('email')?.reset();
    }
  }

  removeContactEmail(contactEmail: Contact) {
    const index = this.contactEmails.indexOf(contactEmail);
    if (index !== -1) {
      this.contactEmails.splice(index, 1);
    }
  }

  onSubmit(newClient: Partial<Client>): void {
    if (this.contactEmails.length <= 0) {
      this.clientForm.controls['email'].markAsDirty();
      this.clientForm.markAllAsTouched();
      return;
    }

    if (this.clientForm.valid && this.contactEmails.length > 0) {
      this.isFormValid = true;
      console.log(newClient);
      ClientsService.addClient({
        name: this.clientForm.get('name')?.value,
        description: this.clientForm.get('description')?.value,
        contacts: this.contactEmails,
      });
      void this.router.navigate(['/clients']);
    } else {
      this.clientForm.markAllAsTouched();
    }
  }

  onBackButtonClicked() {
    this.location.back();
  }

  protected readonly alert = alert;
}
