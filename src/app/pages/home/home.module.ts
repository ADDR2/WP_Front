import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

// COMPONENTS
import { HomePage } from './home';
import { ThumbnailComponent } from '../../components/thumbnail/thumbnail.component';

// SERVICES
import { HttpService } from '../../services/http.service';
import { SearchService } from '../../services/search.service';

// PIPES
import { FilterPipe } from '../../pipes/filter.pipe';
import { SortPipe } from 'src/app/pipes/sort.pipe';

@NgModule({
  declarations: [
    HomePage,
    ThumbnailComponent,
    SortPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule
  ],
  providers: [HttpService, SearchService]
})
export class HomeModule { }
