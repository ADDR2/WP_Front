import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SortObject } from '../models/sort.model';

@Injectable()
export class SortService {
    private sortSubject: Subject<SortObject> = new Subject<SortObject>();
    $sortObserver = this.sortSubject.asObservable();

    runSort(sort: SortObject) {
        this.sortSubject.next(sort);
    }
}