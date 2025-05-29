import { Component } from '@angular/core';
import { NavigationHeaderComponent } from '../../components/navigation-header/navigation-header.component';
import { FileExplorerComponent } from '../../components/file-explorer/file-explorer.component'
import { ClientInformationComponent } from '../../components/client-feed/client-information/client-information.component';
import { ClientCommentsComponent } from '../../components/client-feed/client-information/client-comments/client-comments.component';
import { ClientChecklistComponent } from '../../components/client-checklist/client-checklist.component';
import { ClientFeedComponent } from '../../components/client-feed/client-feed.component';
import { MatCard } from '@angular/material/card';

@Component({
  selector: 'app-client-view',
  imports: [
    NavigationHeaderComponent,
    ClientCommentsComponent,
    FileExplorerComponent,
    ClientChecklistComponent,
    ClientInformationComponent,
    ClientFeedComponent,
    MatCard
  ],
  templateUrl: './client-view.component.html',
  styleUrl: './client-view.component.css'
})
export class ClientViewComponent {

}
