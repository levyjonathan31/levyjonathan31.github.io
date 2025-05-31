import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationHeaderComponent } from '../../components/navigation-header/navigation-header.component';
import { FileExplorerComponent } from '../../components/file-explorer/file-explorer.component'
import { ClientInformationComponent } from '../../components/client-feed/client-information/client-information.component';
import { ClientChecklistComponent } from '../../components/client-checklist/client-checklist.component';
import { ClientFeedComponent } from '../../components/client-feed/client-feed.component';
import { MatCard } from '@angular/material/card';

@Component({
  selector: 'app-client-view',
  imports: [
    CommonModule,
    NavigationHeaderComponent,
    FileExplorerComponent,
    ClientChecklistComponent,
    ClientInformationComponent,
    ClientFeedComponent,
  ],
  templateUrl: './client-view.component.html',
  styleUrl: './client-view.component.css'
})
export class ClientViewComponent {
  selectedClient: any = null;

  onClientSelected(client: any) {
    this.selectedClient = client;
    console.log('Selected client:', client);
  }

deselectClient() {
  this.selectedClient = null;
}
}
