import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';

// MODULES
import { SharedComponentsModule } from '../../shared/shared-components.module';

// COMPONENTS
import { HomePage } from './home';
import { ThumbnailComponent } from '../../components/thumbnail/thumbnail.component';
import { FavouritesDialogComponent } from '../../components/favourites-dialog/favourites-dialog.component';
import { FavouriteIconSVGComponent } from '../../components/favourite-svg/favourite-svg.component';

// SERVICES
import { HttpService } from '../../services/http.service';
import { MessageService } from '../../services/message.service';

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
    PaginatorPipe,
    FavouritesDialogComponent,
    FavouriteIconSVGComponent
  ],
  entryComponents: [ FavouritesDialogComponent ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatDialogModule,
    SharedComponentsModule
  ],
  providers: [ HttpService, MessageService ]
})
export class HomeModule { }
