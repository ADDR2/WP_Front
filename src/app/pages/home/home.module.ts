import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';

// COMPONENTS
import { HomePage } from './home';
import { ThumbnailComponent } from '../../components/thumbnail/thumbnail.component';

// SERVICES
import { HttpService } from '../../services/http.service';
import { SearchService } from '../../services/search.service';

// PIPES
import { FilterPipe } from '../../pipes/filter.pipe';
import { SortPipe } from '../../pipes/sort.pipe';
import { PaginatorPipe } from '../../pipes/paginator.pipe';

@NgModule({
  declarations: [
    HomePage,
    ThumbnailComponent,
    SortPipe,
    FilterPipe,
    PaginatorPipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatPaginatorModule
  ],
  providers: [HttpService, SearchService]
})
export class HomeModule { }
