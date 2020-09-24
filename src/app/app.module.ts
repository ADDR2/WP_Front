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
import { SearchInputComponent } from './components/search-input/search-input.component';

// SERVICES
import { MessageService } from './services/message.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchInputComponent,
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
  providers: [ MessageService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
