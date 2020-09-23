import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

// MODULES
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './pages/home/home.module';

// COMPONENTS
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchIconSVGComponent } from './components/search-icon-svg/search-icon-svg.component';
import { FooterComponent } from './components/footer/footer.component';
import { SortSVGComponent } from './components/sort-svg/sort-svg.component';

// SERVICES
import { SearchService } from './services/search.service';
import { SortService } from './services/sort.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchIconSVGComponent,
    SortSVGComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatSlideToggleModule,
    HomeModule
  ],
  providers: [SearchService, SortService],
  bootstrap: [AppComponent]
})
export class AppModule { }
