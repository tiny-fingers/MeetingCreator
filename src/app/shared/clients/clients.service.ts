import { Injectable } from '@angular/core';
import { Client } from '../../root/model/Client';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  public static clients: Client[] = [
    {
      id: 1,
      name: 'La vie',
      description: 'Focus on green space, French style',
      contacts: [
        { email: 'emma.claire@lavie.com' },
        { email: 'sofia.sonne@lavie.com' },
      ],
    },
    {
      id: 2,
      name: 'Casa de Colores',
      description: 'Put great value on color',
      contacts: [
        { email: 'julia.de.villa@casadecolores.com' },
        { email: 'amy.house@casadecolores.com' },
        { email: 'josh.dechanson@casadecolores.com' },
      ],
    },
    {
      id: 3,
      name: 'Empire Heights',
      description: 'Communication & professionalism',
      contacts: [
        { email: 'carol.bambina@empireheights.com' },
        { email: 'david.gatero@empireheights.com' },
        { email: 'john.bello@empireheights.com' },
      ],
    },
  ];
  public static getClients(): Client[] {
    console.log('Clients:', ClientsService.clients);
    return ClientsService.clients;
  }

  public static addClient(newClient: Partial<Client>): Client[] {
    const client = {
      ...newClient,
      createdBy: 1,
      id: ClientsService.clients.length + 1,
    } as Client;
    ClientsService.clients.push(client);
    return ClientsService.getClients();
  }

  public static deleteClientById(clientId: number): Client[] {
    ClientsService.clients = ClientsService.clients.filter(
      (client) => client.id !== clientId,
    );
    return ClientsService.getClients();
  }

  public static updateClient(client: Client): void {
    const index = ClientsService.clients.findIndex(
      (client) => client.id === client.id,
    );
    if (index !== -1) {
      ClientsService.clients[index] = client;
    }
  }
}
