import { Pipe, PipeTransform } from '@angular/core';

import { SortObject } from '../models/sort.model';
import { Item } from '../models/item.model';

@Pipe({ name: 'sortBy' })
export class SortPipe implements PipeTransform {
    transform(items: Item[], sort: SortObject): Item[] {
        if (!items.length) return null;
        if (!sort || sort.direction === 'none') return [ ...items ];

        return [ ...items ].sort(
            (itemA, itemB) => {
                const itemAValue = typeof itemA[sort.key] === 'string' ? String(itemA[sort.key]).toLocaleLowerCase() : itemA[sort.key];
                const itemBValue = typeof itemB[sort.key] === 'string' ? String(itemB[sort.key]).toLocaleLowerCase() : itemB[sort.key];

                if (itemBValue === itemAValue) return 0;

                if (sort.direction === 'asc') {
                    return itemBValue <= itemAValue ? 1 : -1;
                } else {
                    return itemBValue > itemAValue ? 1 : -1;
                }
            }
        );
    }
}