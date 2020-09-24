import { Component, OnInit, HostListener } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';

import { SortObject } from '../../models/sort.model';
import { FilterObject } from '../../models/filter.model';
import { Item } from '../../models/item.model';
import { HttpService } from '../../services/http.service';
import { MessageService } from '../../services/message.service';
import { environment } from '../../../environments/environment';
import { Paginator } from '../../models/paginator.model';
import { FavouritesDialogComponent } from '../../components/favourites-dialog/favourites-dialog.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class HomePageComponent implements OnInit {
    dataLoaded = false;
    items: Item[] = [];
    favourites: Item[] = [];
    filter: FilterObject = null;
    sort: SortObject = null;
    paginator: Paginator = {
        page: 0,
        paginationActive: false
    };
    pageSize: number = environment.content.pageSize;
    removePaginationUnder: number = environment.content.removePaginationUnder;

    constructor(
        private httpService: HttpService,
        private messageService: MessageService,
        private dialog: MatDialog
    ) {
        this.messageService.$searchObserver.subscribe(
            filter => {
                this.paginator = {
                    page: 0,
                    paginationActive: window.innerWidth >= this.removePaginationUnder
                };
                this.filter = filter;
            }
        );

        this.messageService.$sortObserver.subscribe(
            sort => this.sort = sort
        );

        this.messageService.$favouritesObserver.subscribe(
            () => {
                const dialogRef = this.dialog.open(FavouritesDialogComponent, {
                    height: '70vh',
                    width: '600px',
                    panelClass: 'favourites-dialog',
                    disableClose: true,
                    data: this.items.filter(({ isFavourite }) => isFavourite)
                    .map(({ title, image, isFavourite }) => ({ title, image, isFavourite }))
                });

                dialogRef.afterClosed().subscribe((removedItems: string[]) => {
                    for (const item of this.items) {
                        item.isFavourite = removedItems.includes(item.title) ? false : item.isFavourite;
                    }
                });
            }
        );
    }

    async ngOnInit(): Promise<void> {
        try {
            this.paginator.paginationActive = window.innerWidth >= this.removePaginationUnder;
            this.items = await this.httpService.getItems();
            this.dataLoaded = true;
        } catch (error) {
            console.warn(error);
        }
    }

    onPageChange(event: PageEvent): void {
        this.paginator = {
            page: event.pageIndex,
            paginationActive: window.innerWidth >= this.removePaginationUnder
        };
    }

    @HostListener('window:resize', ['$event'])
    onResize(): void {
        const shouldBeActive = window.innerWidth >= this.removePaginationUnder;

        this.paginator = {
            page: shouldBeActive ? this.paginator.page : 0,
            paginationActive: shouldBeActive
        };
    }
}
