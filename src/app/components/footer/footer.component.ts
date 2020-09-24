import { Component, EventEmitter, Output } from '@angular/core';
import { SortObject } from '../../models/sort.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @Output() favoritesClick: EventEmitter<undefined> = new EventEmitter<undefined>();
  @Output() sort: EventEmitter<SortObject> = new EventEmitter<SortObject>();

  areSortsDisplayed: boolean = null;
  currentSort: SortObject = { key: '', direction: 'none' };
  directions: ('asc' | 'desc' | 'none')[] = [ 'none', 'asc', 'desc' ];
  sorts: string[] = [
    'title',
    'price',
    'email',
    'description'
  ];

  showOrHideSorts(): void {
    this.areSortsDisplayed = !this.areSortsDisplayed;
  }

  toggleSort(sort: string): void {
    this.currentSort = {
      key: sort,
      direction: 'asc'
    };

    this.sort.emit({ ...this.currentSort });
  }

  toggleSortDirection(): void {
    this.currentSort.direction = this.directions[
      (this.directions.indexOf(this.currentSort.direction) + 1) % 3
    ];

    if (this.currentSort.direction === 'none') {
      this.currentSort.key = '';
    }
    this.sort.emit({ ...this.currentSort });
  }
}
