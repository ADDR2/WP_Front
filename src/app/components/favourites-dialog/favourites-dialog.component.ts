import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { FilterIconList } from '../../models/filter-icon-list.model';
import { FilterObject } from '../../models/filter.model';
import { Item } from '../../models/item.model';

@Component({
  selector: 'app-favourites-dialog',
  templateUrl: './favourites-dialog.component.html',
  styleUrls: ['./favourites-dialog.component.scss']
})
export class FavouritesDialogComponent implements OnInit {
    items: Partial<Item>[] = [];
    removedItems: string[] = [];
    filter: FilterObject = null;
    filterIconList: FilterIconList = {
        pathByName: {
          title: './assets/static/round_title_white_18dp.png'
        },
        filters: [
          'title'
        ]
    }

    constructor(
        public dialogRef: MatDialogRef<FavouritesDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: Partial<Item>[]
    ) {
        this.items = [ ...data ];
    }

    ngOnInit() {
        const appContainer = document.querySelector('.app-container') as HTMLDivElement;
        const currentThemeClass = appContainer.classList.toString().replace('app-container ', '');

        (document.querySelector('mat-dialog-container') as HTMLDivElement).classList.add(currentThemeClass);
    }

    removeFavourite(item: Partial<Item>) {
        this.removedItems.push(item.title);
        this.items = this.items.filter(({ title }) => title !== item.title);
    }

    onSearch(filter: FilterObject) {
        this.filter = filter;
    }

    closeDialog() {
        this.dialogRef.close(this.removedItems);
    }
}