import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-record-meta-data',
  imports: [CommonModule, MatTableModule, MatCardModule],
  templateUrl: './record-meta-data.component.html',
  styleUrl: './record-meta-data.component.css',
  encapsulation: ViewEncapsulation.None, // Use None to avoid styles encapsulation
})
export class RecordMetaDataComponent {
  creationDate = new Date(2024, 4, 1);
  modificationDate = new Date();
  status = 'Active';

  metaData = [{
    created: this.creationDate,
    modified: this.modificationDate,
    status: this.status,
    placeholder: 'Placeholder'
  }];
  displayedColumns = ['created', 'modified', 'status', 'placeholder'];
}