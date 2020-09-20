import { Component, OnInit } from '@angular/core';

import { Item } from '../../models/item.model';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class HomePage implements OnInit {
    dataLoaded = false;
    items: Item[] = [];

    constructor(private httpService: HttpService) {}

    async ngOnInit() {
        try {
            this.items = await this.httpService.getItems();
            this.dataLoaded = true;
        } catch(error) {
            console.warn(error);
        }
    }
}
