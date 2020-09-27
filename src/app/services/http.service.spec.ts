import { defer, Observable } from 'rxjs';
import { ItemListResponse } from '../models/item-list-response.model';
import { Item } from '../models/item.model';
import { HttpService } from './http.service';

function responseData(data: string): Observable<ItemListResponse> {
    return defer(() => Promise.resolve(JSON.parse(data)));
}

function responseError(errorObject: Error) {
    return defer(() => Promise.reject(errorObject));
}

describe('Http Service', () => {
    let service: HttpService;
    let httpClientSpy: { get: jasmine.Spy } = jasmine.createSpyObj('HttpClient', ['get']);

    beforeEach(() => {
        service = new HttpService(httpClientSpy as any);
        httpClientSpy.get.calls.reset();
    });

    it('get items when everything is ok', async () => {
        const expectedResponse = `
            {
                "items": [
                    { "title": "item1", "description": "hi", "price": "44", "email": "a@a.com", "image": "https://domain.com/image.jpeg" }
                ]
            }
        `;

        httpClientSpy.get.and.returnValue(responseData(expectedResponse));

        const items: Item[] = await service.getItems();

        expect(httpClientSpy.get.calls.count()).toBe(1);
        expect(items.length).toEqual(1);
        expect(
            (
                JSON.parse(expectedResponse).items as Item[]
            ).map(item => (
                {
                    ...item,
                    price: Number(item.price)
                }
            ))
        ).toEqual(items);
    });

    it('should fail when something goes wrong', async () => {
        const errorMessage = 'Http 500';

        httpClientSpy.get.and.returnValue(responseError(new Error(errorMessage)));

        try {
            await service.getItems();
            expect(1).toEqual(2);
        } catch(error) {
            expect(httpClientSpy.get.calls.count()).toBe(1);
            expect(error).toBeInstanceOf(Error);
            expect(error.message).toEqual(errorMessage);
        }
    });
});