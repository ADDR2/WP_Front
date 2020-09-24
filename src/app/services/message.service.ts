import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { FilterObject } from '../models/filter.model';
import { SortObject } from '../models/sort.model';

@Injectable()
export class MessageService {
    private favouritesSubject: Subject<undefined> = new Subject<undefined>();
    private searchSubject: Subject<FilterObject> = new Subject<FilterObject>();
    private sortSubject: Subject<SortObject> = new Subject<SortObject>();
    
    $sortObserver = this.sortSubject.asObservable();
    $favouritesObserver = this.favouritesSubject.asObservable();
    $searchObserver = this.searchSubject.asObservable();

    runSearch(filter: FilterObject) {
        this.searchSubject.next(filter);
    }

    runSort(sort: SortObject) {
        this.sortSubject.next(sort);
    }

    openFavourites() {
        this.favouritesSubject.next();
    }
}