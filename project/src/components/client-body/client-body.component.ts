import { Component } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-client-body',
  imports: [
    MatCard,
    MatFormFieldModule, // Import MatFormFieldModule for mat-label
    MatInputModule,
    MatIconModule,
    MatListModule     // Import MatInputModule for matInput
  ],
  templateUrl: './client-body.component.html',
  styleUrl: './client-body.component.css'
})
export class ClientBodyComponent {

}
