import { Pipe, PipeTransform } from '@angular/core';

import { Item } from '../models/item.model';
import { Paginator } from '../models/paginator.model';
import { environment } from '../../environments/environment';

@Pipe({ name: 'paginate' })
export class PaginatorPipe implements PipeTransform {
    transform(items: Item[], paginator: Paginator): Item[] {
        if (!paginator.paginationActive) return items;
        
        const startingIndex = paginator.page * environment.content.pageSize;

        return items.slice(
            startingIndex,
            startingIndex + environment.content.pageSize
        );
    }
}