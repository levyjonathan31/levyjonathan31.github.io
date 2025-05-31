import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientCommentsComponent } from './client-comments/client-comments.component';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-client-information',
  imports: [
    CommonModule,
    MatCardModule,
    ClientCommentsComponent
  ],
  templateUrl: './client-information.component.html',
  styleUrl: './client-information.component.css'
})
export class ClientInformationComponent {

  @Input() isCenter = false;
  @Input() fields: any[] = [];



  onSelect() {
    // Your logic here, e.g., emit an event or call a service
    console.log('Client selected!');
  }
}
