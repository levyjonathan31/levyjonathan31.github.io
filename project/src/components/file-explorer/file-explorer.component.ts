import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-file-explorer',
  imports: [CommonModule, MatListModule, MatIconModule, MatButtonModule, MatMenuModule],
  templateUrl: './file-explorer.component.html',
  styleUrl: './file-explorer.component.css'
})
export class FileExplorerComponent {

  folders = [
    { title: "Buyer Agreement", status: 'done' },
    { title: "Comp. Agreement", status: 'in-progress' },
    { title: "Listing Agreement", status: 'needs-review' },
    { title: "Listing Modification", status: 'done' },
    { title: "Executed Contract", status: 'in-progress' },
    { title: "Executed Addenda", status: 'needs-review' },
    { title: "Escrow Verification", status: 'done' },
    { title: "Sellers Disclosure", status: 'in-progress' },
    { title: "Lead-Based Paint", status: 'needs-review' },
    { title: "HOA Rider", status: 'done' },
    { title: "HOPA Disclosure", status: 'in-progress' },
    { title: "Association Approval", status: 'needs-review' },
    { title: "Buyers Legal Docs", status: 'done' },
    { title: "Title Documents", status: 'in-progress' },
    { title: "Closing Disclosure", status: 'needs-review' },
    { title: "Final Walk-through", status: 'done' },
    { title: "Commission Request", status: 'in-progress' },
    { title: "Brokers Deposit", status: 'needs-review' },
    { title: "Brokers Check", status: 'done' },
    { title: "Agents Check", status: 'in-progress' },
  ];
}
