import { Component, OnInit } from '@angular/core';

import { SortObject } from '../../models/sort.model';
import { FilterObject } from '../../models/filter.model';
import { Item } from '../../models/item.model';
import { HttpService } from '../../services/http.service';
import { SearchService } from '../../services/search.service';
import { SortService } from '../../services/sort.service';

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

    constructor(
        private httpService: HttpService,
        private searchService: SearchService,
        private sortService: SortService
    ) {
        this.searchService.$searchObserver.subscribe(
            filter => this.filter = filter
        );

        this.sortService.$sortObserver.subscribe(
            sort => this.sort = sort
        );
    }

    async ngOnInit() {
        try {
            this.items = await this.httpService.getItems();
            this.dataLoaded = true;
        } catch(error) {
            console.warn(error);
        }
    }
}
