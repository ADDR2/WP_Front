import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { FilterObject } from '../models/filter.model';

@Injectable()
export class SearchService {
    private searchSubject: Subject<FilterObject> = new Subject<FilterObject>();
    $searchObserver = this.searchSubject.asObservable();

    runSearch(filter: FilterObject) {
        this.searchSubject.next(filter);
    }
}