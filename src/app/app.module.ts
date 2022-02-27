import { NavbarModule } from './shared/navbar/navbar.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeroComponent } from './pages/home/hero/hero.component';
import { ScrollableContentComponent } from './pages/home/hero/scrollable-content/scrollable-content.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, HeroComponent, ScrollableContentComponent],
  imports: [BrowserModule, AppRoutingModule, NavbarModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
