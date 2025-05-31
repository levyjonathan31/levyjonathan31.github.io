import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for async pipe

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { RecordMetaDataComponent } from './record-meta-data/record-meta-data.component';
import { ClientFormComponent } from './client-form/client-form.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

@Component({
  selector: 'app-navigation-header',
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    SearchBarComponent,
    MatTooltipModule,
    MatDialogModule,
  ],
  templateUrl: './navigation-header.component.html',
  styleUrl: './navigation-header.component.css',

})
export class NavigationHeaderComponent {
  constructor(private readonly dialog: MatDialog) { }
  
  @Output() homeClicked = new EventEmitter<void>();

  onHomeClick() {
    this.homeClicked.emit();
  }
  openMetaDataDialog() {
    this.dialog.open(RecordMetaDataComponent, {
      data: {}
    });
  }
  openAddClientDialog() {
    this.dialog.open(ClientFormComponent, {
      data: {},
      disableClose: true

    });
  }
}