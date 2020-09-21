import { Component, OnInit } from '@angular/core';

import { FilterObject } from '../../models/filter.model';
import { Item } from '../../models/item.model';
import { HttpService } from '../../services/http.service';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class HomePage implements OnInit {
    dataLoaded = false;
    items: Item[] = [];
    filter: FilterObject = null;

    constructor(
        private httpService: HttpService,
        private searchService: SearchService
    ) {
        this.searchService.$searchObserver.subscribe(
            text => this.filter = { value: text, key: 'title' }
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
