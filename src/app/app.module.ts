import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

// MODULES
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './pages/home/home.module';
import { SharedComponentsModule } from './shared/shared-components.module';


// COMPONENTS
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SortSVGComponent } from './components/sort-svg/sort-svg.component';

// SERVICES
import { MessageService } from './services/message.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SortSVGComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatSlideToggleModule,
    SharedComponentsModule,
    HomeModule
  ],
  providers: [ MessageService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
