import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientInformationComponent } from './client-information/client-information.component';
import { MatIcon } from '@angular/material/icon';
@Component({
  selector: 'app-client-feed',
  imports: [CommonModule, ClientInformationComponent, MatIcon],

  templateUrl: './client-feed.component.html',
  styleUrl: './client-feed.component.css'

})
export class ClientFeedComponent {
  clients = [];
  centerIndex = 0;

  get visibleClients() {
    const total = this.clients.length;
    // Wrap around for infinite scroll
    return [
      this.clients[(this.centerIndex - 1 + total) % total],
      this.clients[this.centerIndex],
      this.clients[(this.centerIndex + 1) % total]
    ];
  }

  prev() {
    this.centerIndex = (this.centerIndex - 1 + this.clients.length) % this.clients.length;
  }

  next() {
    this.centerIndex = (this.centerIndex + 1) % this.clients.length;
  }
}