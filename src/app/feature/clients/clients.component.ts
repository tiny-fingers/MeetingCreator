import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbPopover } from '@ng-bootstrap/ng-bootstrap';
import { Client } from '../../root/model/Client';
import { ClientsService } from '../../shared/clients/clients.service';
import { NavItem } from '../../shared/types';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent {
  @ViewChild('addClientPopover') addClientPopover: NgbPopover | undefined;
  clients: Client[] = [];

  constructor(
    private router: Router,
    private popover: NgbPopover,
  ) {
    this.popover.open();
    this.clients = ClientsService.getClients();
  }

  ngAfterViewInit() {
    this.addClientPopover?.open();
  }
  protected readonly NavItem = NavItem;

  onAddNewClientClicked() {
    void this.router.navigate(['/clients/newClient']);
  }

  protected readonly Math = Math;
}
