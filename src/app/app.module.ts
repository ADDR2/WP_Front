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
import { SearchIconSVGComponent } from './components/search-icon-svg/search-icon-svg';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchIconSVGComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatSlideToggleModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
