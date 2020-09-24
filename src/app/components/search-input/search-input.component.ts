import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FilterObject } from '../../models/filter.model';
import { FilterIconList } from '../../models/filter-icon-list.model';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {
    @Input() placeholder = 'Search';
    @Input() filterIconList: FilterIconList;

    @Output() search: EventEmitter<FilterObject> = new EventEmitter<FilterObject>();

    areFiltersDisplayed: boolean = null;
    currentFilter = '';
    pathByName: { [key: string]: string } = {};
    filters: string[] = [];
    lastSearch = '';

    ngOnInit(): void {
        this.filters = this.filterIconList.filters;
        this.pathByName = this.filterIconList.pathByName;

        if (this.filters.length) {
            this.currentFilter = this.filterIconList.filters[0];
            this.filters = this.filters.slice(1);
        }
    }

    onChange({ target }: KeyboardEvent): void {
        this.lastSearch = (target as HTMLInputElement).value;

        this.search.emit({
            value: this.lastSearch,
            key: this.currentFilter
        });
    }

    expandOrCollapseFilters(): void {
        this.areFiltersDisplayed = !this.areFiltersDisplayed;
    }

    onSelectFilter(filter: string): void {
        this.filters.splice(
            this.filters.indexOf(filter),
            1,
            this.currentFilter
        );
        this.currentFilter = filter;

        this.expandOrCollapseFilters();

        this.search.emit({
            value: this.lastSearch,
            key: this.currentFilter
        });
    }
}
