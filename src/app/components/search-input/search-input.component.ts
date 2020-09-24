import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FilterObject } from '../../models/filter.model';
import { FilterIconList } from '../../models/filter-icon-list.model';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {
    @Input() placeholder: string = 'Search';
    @Input() filterIconList: FilterIconList;

    @Output() onSearch: EventEmitter<FilterObject> = new EventEmitter<FilterObject>();

    areFiltersDisplayed: boolean = null;
    currentFilter = '';
    pathByName: { [key: string]: string } = {};
    filters: string[] = []
    lastSearch = '';

    ngOnInit() {
        this.filters = this.filterIconList.filters;
        this.pathByName = this.filterIconList.pathByName;

        if (this.filters.length) {
            this.currentFilter = this.filterIconList.filters[0];
            this.filters = this.filters.slice(1);
        }
    }

    onChange({ target }: KeyboardEvent) {
        this.lastSearch = (target as HTMLInputElement).value;

        this.onSearch.emit({
            value: this.lastSearch,
            key: this.currentFilter
        });
    }

    expandOrCollapseFilters() {
        this.areFiltersDisplayed = !this.areFiltersDisplayed;
    }

    onSelectFilter(filter: string) {
        this.filters.splice(
            this.filters.indexOf(filter),
            1,
            this.currentFilter
        );
        this.currentFilter = filter;
    
        this.expandOrCollapseFilters();
    
        this.onSearch.emit({
            value: this.lastSearch,
            key: this.currentFilter
        });
    }
}