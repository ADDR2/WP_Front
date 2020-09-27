import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { FilterObject } from '../../models/filter.model';
import { ItemListResponse } from '../../models/item-list-response.model';
import { Item } from '../../models/item.model';
import { SortObject } from '../../models/sort.model';
import { MessageService } from '../../services/message.service';
import { HttpService } from '../../services/http.service';
import { HomePageComponent } from './home';

const response: ItemListResponse = {
    items: [
        { title: 'item1', description: 'hi', price: 44, email: 'a@a.com', image: 'https://domain.com/image.jpeg' }
    ]
};

const httpObject: { get: () => Observable<any> } = {
    get(): Observable<any> { return of(response); }
};

class MockHttpService {
    baseUrl = 'https://testing.com/component';
    http = httpObject;

    getItems(): Promise<Item[]> {
        return httpObject.get().toPromise().then(({ items }) => items);
    }
}

class MockMatDialog {
    open(): { afterClosed: () => Observable<{}> } {
        return {
            afterClosed: () => of({})
        };
    }
}

describe('Home Page', () => {
    let component: HomePageComponent;
    let httpService: HttpService;
    let messageService: MessageService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                HomePageComponent,
                { provide: MatDialog, useClass: MockMatDialog },
                { provide: HttpService, useClass: MockHttpService },
                { provide: MessageService, useClass: MessageService }
            ]
        });

        TestBed.inject(MatDialog);
        component = TestBed.inject(HomePageComponent);
        httpService = TestBed.inject(HttpService);
        messageService = TestBed.inject(MessageService);
    });

    it('should listen to sort changes after being instantiated', async () => {
        const newSort: SortObject = { key: 'title', direction: 'desc' };

        expect(component.sort).toBeNull();
        const promise = new Promise(resolve => {
            messageService.$sortObserver.subscribe(resolve);
        });

        messageService.runSort(newSort);
        const sort = await promise;

        expect(sort).toEqual(newSort);
        expect(component.sort).toEqual(newSort);
    });

    it('should listen to filter changes after being instantiated', async () => {
        const newFilter: FilterObject = { key: 'title', value: 'something' };

        expect(component.filter).toBeNull();
        const promise = new Promise(resolve => {
            messageService.$searchObserver.subscribe(resolve);
        });

        messageService.runSearch(newFilter);
        const filter = await promise;

        expect(filter).toEqual(newFilter);
        expect(component.filter).toEqual(newFilter);
        expect(component.paginator.page).toEqual(0);
    });

    it('should request items onInit', async () => {
        expect(component.dataLoaded).toEqual(false);
        expect(component.items).toEqual([]);

        await component.ngOnInit();

        expect(component.dataLoaded).toEqual(true);
        expect(component.items).toEqual(response.items);
    });

    it('should log error and continue executing when onInit fails', async () => {
        expect(component.dataLoaded).toEqual(false);
        expect(component.items).toEqual([]);

        httpObject.get = () => new Observable(obs => obs.error(new Error('something')));
        await component.ngOnInit();

        expect(component.dataLoaded).toEqual(true);
        expect(component.items).toEqual([]);
    });
});
