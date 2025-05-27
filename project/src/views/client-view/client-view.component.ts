import { Component } from '@angular/core';
import { NavigationHeaderComponent } from '../../components/navigation-header/navigation-header.component';
import { FileExplorerComponent } from '../../components/file-explorer/file-explorer.component'
import { ClientFormComponent } from '../../components/client-form/client-form.component';
import { ClientCommentsComponent } from '../../components/client-comments/client-comments.component';
import { ClientChecklistComponent } from '../../components/client-checklist/client-checklist.component';
import { MatCard } from '@angular/material/card';
@Component({
  selector: 'app-client-view',
  imports: [
    NavigationHeaderComponent,
    ClientFormComponent,
    ClientCommentsComponent,
    FileExplorerComponent,
    ClientChecklistComponent,
    MatCard
  ],
  templateUrl: './client-view.component.html',
  styleUrl: './client-view.component.css'
})
export class ClientViewComponent {

}
