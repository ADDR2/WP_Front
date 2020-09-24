import { Pipe, PipeTransform } from '@angular/core';

import { FilterObject } from '../models/filter.model';
import { Item } from '../models/item.model';

@Pipe({ name: 'filterBy' })
export class FilterPipe implements PipeTransform {
    transform(items: Item[], filter: FilterObject): Item[] {
        if (!items || !items.length) {
            return null;
        }
        if (!filter) {
            return items;
        }

        const result = items.filter(
            item => {
                const itemValue = String(item[filter.key]).toLocaleLowerCase();
                const filterValue = filter.value.trim().toLocaleLowerCase();

                return itemValue.includes(filterValue);
            }
        );

        return result.length ? result : null;
    }
}
