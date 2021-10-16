import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-listar',
  templateUrl: './client-listar.component.html',
  styleUrls: ['./client-listar.component.scss']
})
export class ClientListarComponent implements OnInit {

  constructor(private clientService: ClientService) { }
  clients: Array<Client>;
  getClients(): void {
    this.clientService.getClients()
      .subscribe(clients => {
        this.clients = clients;
      });
  }
  ngOnInit() {
    this.getClients();
  }

}
