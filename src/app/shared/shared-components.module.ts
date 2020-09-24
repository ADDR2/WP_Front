import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SearchIconSVGComponent } from '../components/search-icon-svg/search-icon-svg.component';
import { SearchInputComponent } from '../components/search-input/search-input.component';


@NgModule({
    imports: [ CommonModule ],
    declarations: [
        SearchIconSVGComponent,
        SearchInputComponent
    ],
    exports: [
        SearchIconSVGComponent,
        SearchInputComponent
    ]
})
export class SharedComponentsModule { }
