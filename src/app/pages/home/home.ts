import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

import { SortObject } from '../../models/sort.model';
import { FilterObject } from '../../models/filter.model';
import { Item } from '../../models/item.model';
import { HttpService } from '../../services/http.service';
import { SearchService } from '../../services/search.service';
import { SortService } from '../../services/sort.service';
import { environment } from '../../../environments/environment';
import { Paginator } from '../../models/paginator.model';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class HomePage implements OnInit {
    dataLoaded = false;
    items: Item[] = [];
    filter: FilterObject = null;
    sort: SortObject = null;
    paginator: Paginator = {
        page: 0,
        paginationActive: false
    };
    pageSize: number = environment.content.pageSize;
    removePaginationUnder: number = environment.content.removePaginationUnder;

    constructor(
        private httpService: HttpService,
        private searchService: SearchService,
        private sortService: SortService
    ) {
        this.searchService.$searchObserver.subscribe(
            filter => {
                this.paginator = {
                    page: 0,
                    paginationActive: window.innerWidth >= this.removePaginationUnder
                };
                this.filter = filter;
            }
        );

        this.sortService.$sortObserver.subscribe(
            sort => this.sort = sort
        );
    }

    async ngOnInit() {
        try {
            this.paginator.paginationActive = window.innerWidth >= this.removePaginationUnder;
            this.items = await this.httpService.getItems();
            this.dataLoaded = true;
        } catch(error) {
            console.warn(error);
        }
    }

    onPageChange(event: PageEvent) {
        this.paginator = {
            page: event.pageIndex,
            paginationActive: window.innerWidth >= this.removePaginationUnder
        };
    }

    @HostListener('window:resize', ['$event'])
    onResize() {
        const shouldBeActive = window.innerWidth >= this.removePaginationUnder;

        this.paginator = {
            page: shouldBeActive ? this.paginator.page : 0,
            paginationActive: shouldBeActive
        };
    }
}
