import { Component, EventEmitter, Output } from '@angular/core';
import { FilterIconList } from '../../models/filter-icon-list.model';
import { FilterObject } from '../../models/filter.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() themeChange: EventEmitter<undefined> = new EventEmitter<undefined>();
  @Output() search: EventEmitter<FilterObject> = new EventEmitter<FilterObject>();

  areSettingsDisplayed: boolean = null;
  filterIconList: FilterIconList = {
    pathByName: {
      title: './assets/static/round_title_white_18dp.png',
      price: './assets/static/round_euro_symbol_white_18dp.png',
      email: './assets/static/round_alternate_email_white_18dp.png',
      description: './assets/static/round_description_white_18dp.png',
    },
    filters: [
      'title',
      'price',
      'email',
      'description'
    ]
  };

  showOrHideSettings(): void {
    this.areSettingsDisplayed = !this.areSettingsDisplayed;
  }

  changeTheme(): void {
    this.themeChange.emit();
  }
}
