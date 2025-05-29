import { Component } from '@angular/core';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-client-comments',
  imports: [MatLabel, MatFormField, MatInput],
  templateUrl: './client-comments.component.html',
  styleUrl: './client-comments.component.css'
})
export class ClientCommentsComponent {

}
