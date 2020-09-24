import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Item } from '../../models/item.model';

@Component({
  selector: 'app-favourites-dialog',
  templateUrl: './favourites-dialog.component.html',
  styleUrls: ['./favourites-dialog.component.scss']
})
export class FavouritesDialogComponent {
    constructor(
        public dialogRef: MatDialogRef<FavouritesDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public items: Item[]
    ) {}

    closeDialog() {
        this.dialogRef.close(this.items);
    }
}