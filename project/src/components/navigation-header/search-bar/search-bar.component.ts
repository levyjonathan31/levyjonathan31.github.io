import { Component } from '@angular/core';
import { Observable, startWith, map } from 'rxjs';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-search-bar',
  imports: [MatAutocompleteModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  searchControl = new FormControl('');
  options: string[] = ['John Doe', 'Mary Jane', 'Chris Bloodsworth'];
  filteredOptions!: Observable<string[]>;
  creationDate = new Date(2024, 4, 1);
  modificationDate = new Date();
  status = 'Active';

  ngOnInit() {
    this.filteredOptions = this.searchControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}
