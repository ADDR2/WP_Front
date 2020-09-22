import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sort-svg',
  templateUrl: './sort-svg.component.html',
  styleUrls: ['./sort-svg.component.scss']
})
export class SortSVGComponent {
    @Input() key: string;
}