import { Component } from '@angular/core';
import { NavigationHeaderComponent } from '../../components/navigation-header/navigation-header.component';
import { ClientBodyComponent } from '../../components/client-body/client-body.component';

@Component({
  selector: 'app-client-view',
  imports: [NavigationHeaderComponent, ClientBodyComponent],
  templateUrl: './client-view.component.html',
  styleUrl: './client-view.component.css'
})
export class ClientViewComponent {

}
