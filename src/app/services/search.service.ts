import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class SearchService {
    private searchSubject: Subject<string> = new Subject<string>();
    $searchObserver = this.searchSubject.asObservable();

    runSearch(text: string) {
        this.searchSubject.next(text);
    }
}