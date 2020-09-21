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
import { FilterPipe } from '../../pipes/filter.pipe';

@NgModule({
  declarations: [
    HomePage,
    ThumbnailComponent,
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
