import { Component, EventEmitter, Output } from '@angular/core';
import { FilterObject } from 'src/app/models/filter.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() onThemeChange: EventEmitter<undefined> = new EventEmitter<undefined>();
  @Output() onSearch: EventEmitter<FilterObject> = new EventEmitter<FilterObject>();

  areSettingsDisplayed: boolean = null;
  areFiltersDisplayed: boolean = null;
  lastSearch = '';
  currentFilter = 'title';
  pathByName = {
    title: '../assets/static/round_title_white_18dp.png',
    price: '../assets/static/round_euro_symbol_white_18dp.png',
    email: '../assets/static/round_alternate_email_white_18dp.png',
    description: '../assets/static/round_description_white_18dp.png',
  }
  filters: string[] = [
    'price',
    'email',
    'description'
  ]

  showOrHideSettings() {
    this.areSettingsDisplayed = !this.areSettingsDisplayed;
  }

  changeTheme() {
    this.onThemeChange.emit();
  }

  searchBy({ target }: KeyboardEvent) {
    this.lastSearch = (target as HTMLInputElement).value;

    this.onSearch.emit({
      value: this.lastSearch,
      key: this.currentFilter
    });
  }

  expandOrCollapseFilters() {
    this.areFiltersDisplayed = !this.areFiltersDisplayed;
  }

  changeCurrentFilter(filterName: string) {
    this.filters.splice(
      this.filters.indexOf(filterName),
      1,
      this.currentFilter
    );
    this.currentFilter = filterName;

    this.expandOrCollapseFilters();

    this.onSearch.emit({
      value: this.lastSearch,
      key: this.currentFilter
    });
  }
}
