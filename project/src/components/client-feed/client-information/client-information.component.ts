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

  fields = [
    { label: 'Contact 1 Full Name', value: 'Jane Smith' },
    { label: 'Contact 2 Full Name', value: 'John Smith' },
    { label: 'Email Address', value: 'jane.smith@example.com' },
    { label: 'Phone Number', value: '(555) 123-4567' },
    { label: 'Property Control Number', value: 'PCN-00123' },
    { label: 'Status', value: 'Qualified' },
    { label: 'Lead Source', value: 'Referral' },
    { label: 'Income Type', value: 'W-2' },
    { label: 'Credit Score Range', value: 'High' },
    { label: 'Background Check', value: 'Excellent' }
  ];

  onSelect() {
    // Your logic here, e.g., emit an event or call a service
    console.log('Client selected!');
  }
}
