import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

// COMPONENTS
import { HomePage } from './home';

// SERVICES
import { HttpService } from '../../services/http.service';
import { ThumbnailComponent } from '../../components/thumbnail/thumbnail.component';

@NgModule({
  declarations: [
    HomePage,
    ThumbnailComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule
  ],
  providers: [HttpService]
})
export class HomeModule { }
