import { Component } from '@angular/core';

import { SearchService } from './services/search.service';
import { SortService } from './services/sort.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wallapop-test';
  isDarkThemEnabled = true;

  constructor(
    public searchService: SearchService,
    public sortService: SortService
  ) {}

  showFavorites() {
    
  }
}
