import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for async pipe

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { map, Observable, startWith } from 'rxjs';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-navigation-header',
  imports: [
    CommonModule, // Add CommonModule for async pipe
    MatIconModule,
    MatButtonModule,

  ],
  templateUrl: './navigation-header.component.html',
  styleUrl: './navigation-header.component.css',
  animations: [
    trigger('slideInOut', [
      state('in', style({ width: '*', opacity: 1, marginLeft: '12px' })),
      state('out', style({ width: '0px', opacity: 0, marginLeft: '0' })),
      transition('out => in', [
        style({ width: '0px', opacity: 0, marginLeft: '0' }),
        animate('200ms ease-out', style({ width: '*', opacity: 1, marginLeft: '12px' }))
      ]),
      transition('in => out', [
        animate('150ms ease-in', style({ width: '0px', opacity: 0, marginLeft: '0' }))
      ]),
    ])
  ]
})
export class NavigationHeaderComponent {
  searchOpen = false;

  toggleSearch() {
    this.searchOpen = !this.searchOpen;
  }
}