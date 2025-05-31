import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  @Input() isCenter = true;
    @Input() showSelect = false; // <-- new input

  @Input() client: any[] = [];
  @Output() clientSelected = new EventEmitter<any>();



  onSelect() {
    console.log('Client selected!');
    this.clientSelected.emit(this.client);
  }
}
