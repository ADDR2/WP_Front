import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Item } from '../../models/item.model';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.scss']
})
export class ThumbnailComponent {
  @Input() item: Item;
}
