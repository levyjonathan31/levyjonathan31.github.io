import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientInformationComponent } from './client-information/client-information.component';
import { MatIcon } from '@angular/material/icon';
@Component({
  selector: 'app-client-feed',
  imports: [CommonModule, ClientInformationComponent, MatIcon],
  templateUrl: './client-feed.component.html',
  styleUrl: './client-feed.component.css',
})
export class ClientFeedComponent {
  centerIndex = 0;
  @Output() clientSelected = new EventEmitter<any>();

  clients = [
    [
      { label: 'Contact 1 Full Name', value: 'Jane Smith' },
      { label: 'Contact 2 Full Name', value: 'John Smith' },
      { label: 'Email Address', value: 'jane.smith@example.com' },
      { label: 'Phone Number', value: '(555) 123-4567' },
      { label: 'Property Control Number', value: 'PCN-00123' },
      { label: 'Status', value: 'Qualified' },
      { label: 'Lead Source', value: 'Referral' },
      { label: 'Income Type', value: 'W-2' },
      { label: 'Credit Score Range', value: 'High' },
      { label: 'Background Check', value: 'Excellent' },
    ],
    [
      { label: 'Contact 1 Full Name', value: 'Alice Johnson' },
      { label: 'Contact 2 Full Name', value: 'Bob Johnson' },
      { label: 'Email Address', value: 'alice.j@example.com' },
      { label: 'Phone Number', value: '(555) 234-5678' },
      { label: 'Property Control Number', value: 'PCN-00456' },
      { label: 'Status', value: 'Pending' },
      { label: 'Lead Source', value: 'Online' },
      { label: 'Income Type', value: '1099' },
      { label: 'Credit Score Range', value: 'Medium' },
      { label: 'Background Check', value: 'Good' },
    ],
    [
      { label: 'Contact 1 Full Name', value: 'Carlos Rivera' },
      { label: 'Contact 2 Full Name', value: 'Maria Rivera' },
      { label: 'Email Address', value: 'carlos.r@example.com' },
      { label: 'Phone Number', value: '(555) 345-6789' },
      { label: 'Property Control Number', value: 'PCN-00789' },
      { label: 'Status', value: 'Rejected' },
      { label: 'Lead Source', value: 'Walk-in' },
      { label: 'Income Type', value: 'Self-Employed' },
      { label: 'Credit Score Range', value: 'Low' },
      { label: 'Background Check', value: 'Fair' },
    ],
    [
      { label: 'Contact 1 Full Name', value: 'Emily Chen' },
      { label: 'Contact 2 Full Name', value: 'David Lee' },
      { label: 'Email Address', value: 'emily.chen@example.com' },
      { label: 'Phone Number', value: '(555) 456-7890' },
      { label: 'Property Control Number', value: 'PCN-01012' },
      { label: 'Status', value: 'Qualified' },
      { label: 'Lead Source', value: 'Agent' },
      { label: 'Income Type', value: 'W-2' },
      { label: 'Credit Score Range', value: 'High' },
      { label: 'Background Check', value: 'Excellent' },
    ],
    [
      { label: 'Contact 1 Full Name', value: 'Frank Miller' },
      { label: 'Contact 2 Full Name', value: 'Grace Miller' },
      { label: 'Email Address', value: 'frank.m@example.com' },
      { label: 'Phone Number', value: '(555) 567-8901' },
      { label: 'Property Control Number', value: 'PCN-01345' },
      { label: 'Status', value: 'Pending' },
      { label: 'Lead Source', value: 'Referral' },
      { label: 'Income Type', value: 'Retired' },
      { label: 'Credit Score Range', value: 'Medium' },
      { label: 'Background Check', value: 'Good' },
    ],
    [
      { label: 'Contact 1 Full Name', value: 'Hannah Patel' },
      { label: 'Contact 2 Full Name', value: 'Raj Patel' },
      { label: 'Email Address', value: 'hannah.patel@example.com' },
      { label: 'Phone Number', value: '(555) 678-9012' },
      { label: 'Property Control Number', value: 'PCN-01678' },
      { label: 'Status', value: 'Qualified' },
      { label: 'Lead Source', value: 'Online' },
      { label: 'Income Type', value: 'W-2' },
      { label: 'Credit Score Range', value: 'High' },
      { label: 'Background Check', value: 'Excellent' },
    ],
    [
      { label: 'Contact 1 Full Name', value: 'Isabella Rossi' },
      { label: 'Contact 2 Full Name', value: 'Marco Rossi' },
      { label: 'Email Address', value: 'isabella.rossi@example.com' },
      { label: 'Phone Number', value: '(555) 789-0123' },
      { label: 'Property Control Number', value: 'PCN-01901' },
      { label: 'Status', value: 'Rejected' },
      { label: 'Lead Source', value: 'Walk-in' },
      { label: 'Income Type', value: 'Self-Employed' },
      { label: 'Credit Score Range', value: 'Low' },
      { label: 'Background Check', value: 'Poor' },
    ],
  ];
  get visibleClients() {
    const total = this.clients.length;
    // Wrap around for infinite scroll
    return [
      this.clients[(this.centerIndex - 1 + total) % total],
      this.clients[this.centerIndex],
      this.clients[(this.centerIndex + 1) % total],
    ];
  }

  prev() {
    this.centerIndex =
      (this.centerIndex - 1 + this.clients.length) % this.clients.length;
  }

  next() {
    this.centerIndex = (this.centerIndex + 1) % this.clients.length;
  }

  selectClient(client: any) {
    this.clientSelected.emit(client);
  }
}
