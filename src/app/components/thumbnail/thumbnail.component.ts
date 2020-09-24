import { Component, EventEmitter, Output, Input } from '@angular/core';

import { Item } from '../../models/item.model';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.scss']
})
export class ThumbnailComponent {
  @Input() item: Partial<Item>;
  @Input() styles: Partial<CSSStyleDeclaration> = {};
  @Output() onSelectFavourite: EventEmitter<Partial<Item>> = new EventEmitter<Partial<Item>>();

  onSelect() {
    this.item.isFavourite = !this.item.isFavourite
    this.onSelectFavourite.emit(this.item);
  }
}
