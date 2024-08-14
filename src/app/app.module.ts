import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScrollBackgroundComponent } from './scroll-background/scroll-background.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { Section2Component } from './section2/section2.component';
import { FooterComponent } from './footer/footer.component';
import { Section3Component } from './section3/section3.component';
import { NewComponent } from './new/new.component';
import { DemoComponent } from './demo/demo.component';
import { Reuters2Component } from './reuters2/reuters2.component';
import { Reuters3Component } from './reuters3/reuters3.component';

@NgModule({
  declarations: [
    AppComponent,
    ScrollBackgroundComponent,
    HeaderComponent,
    HomeComponent,
    Section2Component,
    FooterComponent,
    Section3Component,
    NewComponent,
    DemoComponent,
    Reuters2Component,
    Reuters3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
