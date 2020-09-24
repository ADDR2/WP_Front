import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ItemListResponse } from '../models/item-list-response.model';
import { Item } from '../models/item.model';

@Injectable()
export class HttpService {
    private baseURL = 'https://frontend-tech-test-data.s3.eu-west-1.amazonaws.com';

    constructor(private http: HttpClient) {}

    getItems(): Promise<Item[]> {
        return this.http.get<ItemListResponse>(`${this.baseURL}/items.json`)
            .toPromise()
            .then(({ items }) => {
                for (const item of items) {
                    item.price = Number(item.price);
                }

                return items;
            })
        ;
    }
}
