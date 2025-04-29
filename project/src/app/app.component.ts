// app.component.ts
import { Component } from '@angular/core';
import { ClientViewComponent } from '../views/client-view/client-view.component';

@Component({
  selector: 'app-root',
  imports: [ClientViewComponent],  // Import MatCardModule here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Cheerful File';
}